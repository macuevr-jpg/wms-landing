@echo off
REM === clean_install_and_run.bat ===
REM Full clean + reinstall + run for your project.

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

echo [STEP] Cleaning previous install...
rmdir /s /q node_modules 2>nul
del /f /q package-lock.json 2>nul
npm cache clean --force

echo [STEP] Installing dependencies (legacy peer deps)...
npm install --legacy-peer-deps
IF ERRORLEVEL 1 (
  echo [ERROR] npm install failed.
  pause
  goto :eof
)

echo [STEP] Starting dev server...
cmd /k "npm run dev"

endlocal
