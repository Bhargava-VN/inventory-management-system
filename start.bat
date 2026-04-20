@echo off
REM Inventory Management System - One Click Starter
REM This script starts both client and server automatically

echo.
echo ========================================
echo 📦 Inventory Management System
echo Starting Development Environment...
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node --version
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: npm is not installed or not in PATH
    pause
    exit /b 1
)

echo ✅ npm found:
npm --version
echo.

REM Install server dependencies if needed
echo [1/4] Checking server dependencies...
cd /d "%~dp0server"
if not exist "node_modules" (
    echo Installing server dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ❌ Failed to install server dependencies
        pause
        exit /b 1
    )
)
echo ✅ Server dependencies ready
echo.

REM Install client dependencies if needed
echo [2/4] Checking client dependencies...
cd /d "%~dp0client"
if not exist "node_modules" (
    echo Installing client dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ❌ Failed to install client dependencies
        pause
        exit /b 1
    )
)
echo ✅ Client dependencies ready
echo.

REM Start the server
echo [3/4] Starting Server on http://localhost:5000...
cd /d "%~dp0server"
start "Inventory System - Server" cmd /k npm run dev
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to start server
    pause
    exit /b 1
)

timeout /t 3 >nul

REM Start the client
echo [4/4] Starting Client on http://localhost:5173...
cd /d "%~dp0client"
start "Inventory System - Client" cmd /k npm run dev
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to start client
    pause
    exit /b 1
)

echo.
echo ========================================
echo ✅ SUCCESS! System is starting...
echo ========================================
echo.
echo 🌐 Frontend: http://localhost:5173
echo 🔗 Backend:  http://localhost:5000
echo.
echo Default Login Credentials:
echo 📧 Email: test-visitor@gmail.com
echo 🔑 Password: pass123
echo.
echo 💡 Note: Two terminal windows will open for server and client
echo.
echo Press any key to continue...
pause
