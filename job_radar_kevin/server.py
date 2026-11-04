import http.server
import json
import os
import queue
import socketserver
import threading
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright
from auto_apply import PROFILE_DIR, JOBS_FILE, automate_job_tab

BASE_DIR = r"C:\Users\Kevin\.gemini\antigravity\scratch\job_radar_kevin"
PORT = 8765

job_queue = queue.Queue()


def playwright_worker():
    """Dedicated single thread that owns the Playwright Chromium instance and opens new tabs on demand."""
    pw = None
    context = None

    while True:
        job_id = job_queue.get()
        if job_id is None:
            break

        try:
            with open(JOBS_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
            all_jobs = {j["id"]: j for j in data.get("jobs", [])}
            job = all_jobs.get(job_id)
            if not job:
                print(f"[Playwright] Job ID not found: {job_id}", flush=True)
                job_queue.task_done()
                continue

            need_launch = False
            if context is None:
                need_launch = True
            else:
                try:
                    _ = context.pages
                except Exception:
                    need_launch = True

            if need_launch:
                if pw is not None:
                    try:
                        pw.stop()
                    except Exception:
                        pass
                pw = sync_playwright().start()
                print("[Playwright] Launching dedicated Chromium window...", flush=True)
                context = pw.chromium.launch_persistent_context(
                    user_data_dir=PROFILE_DIR,
                    headless=False,
                    args=["--start-maximized", "--disable-blink-features=AutomationControlled"],
                    no_viewport=True
                )

            page = context.new_page()
            res = automate_job_tab(page, job)
            print(f"[Playwright] {job['id']} -> {res}", flush=True)
        except Exception as e:
            print(f"[Playwright Error] {job_id}: {e}", flush=True)
            context = None
        finally:
            job_queue.task_done()


class JobRadarHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Request-Private-Network")
        self.send_header("Access-Control-Allow-Private-Network", "true")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/apply":
            length = int(self.headers.get("Content-Length", 0))
            body = json.loads(self.rfile.read(length).decode("utf-8")) if length > 0 else {}
            job_ids = body.get("jobIds", [])

            if not job_ids:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": "No jobIds provided"}).encode("utf-8"))
                return

            for jid in job_ids:
                job_queue.put(jid)

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({
                "ok": True,
                "message": f"Playwright abrió {len(job_ids)} pestaña(s) en la ventana de Chromium."
            }).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()


class ThreadingHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    worker = threading.Thread(target=playwright_worker, daemon=True)
    worker.start()

    with ThreadingHTTPServer(("127.0.0.1", PORT), JobRadarHandler) as httpd:
        print(f"Job Radar + Persistent Playwright Worker running at http://127.0.0.1:{PORT}", flush=True)
        httpd.serve_forever()
