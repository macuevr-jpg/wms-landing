@echo off
REM === start_wms_dev.bat ===
REM One-click launcher for your Vite dev server
REM - uses legacy OpenSSL provider for npm TLS stability on Windows
REM - installs deps automatically if node_modules is missing
REM - starts the dev server in a new console window
REM - opens http://localhost:5173/ in your default browser

setlocal
set NODE_OPTIONS=--openssl-legacy-provider

REM >>> CHANGE THIS PATH IF YOUR PROJECT LIVES ELSEWHERE <<<
cd /d C:\Projects\wms-landing

IF NOT EXIST package.json (
  echo [ERROR] package.json not found in %CD%.
  echo Please edit this script and set the correct project folder.
  pause
  goto :eof
)

IF NOT EXIST node_modules (
  echo [INFO] node_modules not found — installing dependencies...
  npm install --legacy-peer-deps
)

echo [INFO] Launching Vite dev server...
start "Vite Dev Server" cmd /k "npm run dev"

REM Wait a bit so Vite boots, then open the browser
timeout /t 3 >nul
start "" http://localhost:5173/

endlocal
