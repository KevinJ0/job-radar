@echo off
title Job Radar + Playwright Auto-Apply (Kevin Rosario)
echo Iniciando servidor Job Radar + Playwright en http://127.0.0.1:8765 ...
start "" "http://127.0.0.1:8765"
"C:\Users\Kevin\AppData\Local\Programs\Python\Python312\python.exe" "C:\Users\Kevin\.gemini\antigravity\scratch\job_radar_kevin\server.py"
pause
