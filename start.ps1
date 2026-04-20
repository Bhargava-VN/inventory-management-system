# Inventory Management System - Quick Start PowerShell Script

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📦 Inventory Management System" -ForegroundColor Green
Write-Host "Starting Development Environment..." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ ERROR: Node.js is not found" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "✅ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ ERROR: npm is not found" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Get the directory where this script is located
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Install server dependencies if needed
Write-Host "[1/4] Checking server dependencies..." -ForegroundColor Yellow
Set-Location "$ScriptDir\server"
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing server dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install server dependencies" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
}
Write-Host "✅ Server dependencies ready" -ForegroundColor Green
Write-Host ""

# Install client dependencies if needed
Write-Host "[2/4] Checking client dependencies..." -ForegroundColor Yellow
Set-Location "$ScriptDir\client"
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing client dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install client dependencies" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
}
Write-Host "✅ Client dependencies ready" -ForegroundColor Green
Write-Host ""

# Start the server
Write-Host "[3/4] Starting Server on http://localhost:5000..." -ForegroundColor Yellow
Set-Location "$ScriptDir\server"
Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "npm run dev" -WindowStyle Normal -PassThru | Out-Null
Write-Host "✅ Server terminal opened" -ForegroundColor Green

Start-Sleep -Seconds 3

# Start the client
Write-Host "[4/4] Starting Client on http://localhost:5173..." -ForegroundColor Yellow
Set-Location "$ScriptDir\client"
Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "npm run dev" -WindowStyle Normal -PassThru | Out-Null
Write-Host "✅ Client terminal opened" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ SUCCESS! System is starting..." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Frontend: http://localhost:5173" -ForegroundColor Green
Write-Host "🔗 Backend:  http://localhost:5000" -ForegroundColor Green
Write-Host ""
Write-Host "Default Login Credentials:" -ForegroundColor Yellow
Write-Host "📧 Email: test-visitor@gmail.com" -ForegroundColor White
Write-Host "🔑 Password: pass123" -ForegroundColor White
Write-Host ""
Write-Host "💡 Note: Two terminal windows will open for server and client" -ForegroundColor Yellow
Write-Host ""
