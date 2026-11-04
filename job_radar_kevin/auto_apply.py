import json
import os
import time

BASE_DIR = r"C:\Users\Kevin\.gemini\antigravity\scratch\job_radar_kevin"
PROFILE_DIR = os.path.join(BASE_DIR, "pw_chromium_profile")
JOBS_FILE = os.path.join(BASE_DIR, "jobs_data.json")
os.makedirs(PROFILE_DIR, exist_ok=True)

COVER_LETTER_ES = (
    "Hola, soy Kevin Rosario, Ingeniero en Sistemas y Computación con 4+ años de experiencia "
    "construyendo software full-stack de punta a punta (web, móvil y escritorio) en producción. "
    "Cuento con sólido dominio de .NET Core, C#, ASP.NET Core, Flutter/Dart, Angular, SQL Server, "
    "Oracle (PL/SQL), SQLite, APIs REST/JWT, SignalR y Python. Actualmente curso la Maestría en "
    "Ingeniería de Software y Sistemas Informáticos en UNIR y tengo disponibilidad inmediata "
    "en modalidad 100% remota (o presencial en La Romana, RD)."
)


def inject_status_banner(page, message: str, bg_color: str = "#ea580c"):
    try:
        page.evaluate(
            """([msg, bg]) => {
                let el = document.getElementById('kevin-pw-banner');
                if (!el) {
                    el = document.createElement('div');
                    el.id = 'kevin-pw-banner';
                    el.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:2147483647;padding:12px 20px;color:#fff;font-family:sans-serif;font-size:14px;font-weight:bold;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.45);';
                    document.body.appendChild(el);
                }
                el.style.background = bg;
                el.textContent = '🤖 Playwright Auto-Apply (Kevin Rosario): ' + msg;
            }""",
            [message, bg_color]
        )
    except Exception:
        pass


def automate_job_tab(page, job: dict) -> dict:
    url = job["url"]
    title = job["title"]
    page.bring_to_front()
    page.goto(url, wait_until="commit", timeout=45000)
    try:
        page.wait_for_selector("body", timeout=15000)
    except Exception:
        pass
    time.sleep(2.5)
    page.bring_to_front()

    # 1. Computrabajo (DO / MX / AR)
    if "computrabajo" in url:
        inject_status_banner(page, f"Buscando botón 'Postularme' para: {title}...")
        apply_selectors = [
            "a[data-link='apply']",
            "#apply_btn",
            "button:has-text('Postularme')",
            "a:has-text('Postularme')",
            "button:has-text('Aplicar')",
            "a.b_primary:has-text('Postularme')"
        ]
        clicked = False
        for sel in apply_selectors:
            loc = page.locator(sel).first
            if loc.count() > 0 and loc.is_visible():
                loc.scroll_into_view_if_needed()
                loc.click()
                clicked = True
                break

        time.sleep(2.5)
        # Fill any visible textareas (cover letter / questions)
        textareas = page.locator("textarea:visible")
        for i in range(textareas.count()):
            ta = textareas.nth(i)
            try:
                if not ta.input_value():
                    ta.fill(COVER_LETTER_ES)
            except Exception:
                pass

        # Click final submit if visible
        for sub_sel in ["button[type='submit']:has-text('Enviar')", "button:has-text('Postularme')", "button:has-text('Continuar')"]:
            btn = page.locator(sub_sel).first
            if btn.count() > 0 and btn.is_visible():
                try:
                    btn.click()
                except Exception:
                    pass
                break

        if clicked:
            inject_status_banner(
                page,
                "¡Botón 'Postularme' pulsado! Si te pide iniciar sesión por primera vez en Computrabajo, hazlo aquí y quedará guardado.",
                "#16a34a"
            )
            return {"status": "APPLIED", "message": "Clic en Postularme realizado en Computrabajo."}
        else:
            inject_status_banner(
                page,
                "Inicia sesión en Computrabajo en esta pestaña para completar la postulación.",
                "#0284c7"
            )
            return {"status": "OPENED", "message": "Pestaña abierta en Computrabajo."}

    # 2. InfoJobs (España)
    elif "infojobs" in url:
        inject_status_banner(page, f"Preparando inscripción en InfoJobs: {title}...")
        for csel in ["#didomi-notice-agree-button", "button:has-text('Aceptar')", "button:has-text('Aceptar todas')"]:
            btn = page.locator(csel).first
            if btn.count() > 0 and btn.is_visible():
                try:
                    btn.click(timeout=2000)
                except Exception:
                    pass

        time.sleep(1.5)
        apply_selectors = [
            "button:has-text('Inscribirme en esta oferta')",
            "a:has-text('Inscribirme en esta oferta')",
            "button:has-text('Inscribirme')",
            "a:has-text('Inscribirme')"
        ]
        clicked = False
        for sel in apply_selectors:
            loc = page.locator(sel).first
            if loc.count() > 0 and loc.is_visible():
                loc.scroll_into_view_if_needed()
                loc.click()
                clicked = True
                break

        time.sleep(2)
        textareas = page.locator("textarea:visible")
        for i in range(textareas.count()):
            ta = textareas.nth(i)
            try:
                if not ta.input_value():
                    ta.fill(COVER_LETTER_ES)
            except Exception:
                pass

        if clicked:
            inject_status_banner(
                page,
                "¡Botón 'Inscribirme' pulsado! Si no has iniciado sesión en InfoJobs, ingresa tu cuenta aquí (quedará guardada).",
                "#16a34a"
            )
            return {"status": "APPLIED", "message": "Clic en Inscribirme ejecutado en InfoJobs."}
        else:
            inject_status_banner(
                page,
                "Si InfoJobs muestra verificación o login por primera vez, resuélvelo en esta pestaña (quedará guardado en el perfil).",
                "#0284c7"
            )
            return {"status": "OPENED", "message": "Pestaña abierta en InfoJobs."}

    # 3. Bumeran (Argentina)
    elif "bumeran" in url:
        inject_status_banner(page, f"Buscando botón 'Postularme' en Bumeran: {title}...")
        for sel in ["button:has-text('Postularme')", "a:has-text('Postularme')"]:
            loc = page.locator(sel).first
            if loc.count() > 0 and loc.is_visible():
                loc.click()
                inject_status_banner(page, "¡Botón 'Postularme' pulsado en Bumeran!", "#16a34a")
                return {"status": "APPLIED", "message": "Clic en Postularme realizado en Bumeran."}

        inject_status_banner(page, "Inicia sesión en Bumeran y pulsa 'Postularme' (tu sesión quedará guardada).", "#0284c7")
        return {"status": "OPENED", "message": "Pestaña abierta en Bumeran."}

    return {"status": "OPENED", "message": "Oferta abierta."}
