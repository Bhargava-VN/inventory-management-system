#!/bin/bash

# Inventory Management System - One Click Starter
# This script starts both client and server automatically

echo ""
echo "========================================"
echo "📦 Inventory Management System"
echo "Starting Development Environment..."
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ ERROR: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found:"
node --version
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ ERROR: npm is not installed"
    exit 1
fi

echo "✅ npm found:"
npm --version
echo ""

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Install server dependencies if needed
echo "[1/4] Checking server dependencies..."
cd "$SCRIPT_DIR/server"
if [ ! -d "node_modules" ]; then
    echo "Installing server dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install server dependencies"
        exit 1
    fi
fi
echo "✅ Server dependencies ready"
echo ""

# Install client dependencies if needed
echo "[2/4] Checking client dependencies..."
cd "$SCRIPT_DIR/client"
if [ ! -d "node_modules" ]; then
    echo "Installing client dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install client dependencies"
        exit 1
    fi
fi
echo "✅ Client dependencies ready"
echo ""

# Start the server in background
echo "[3/4] Starting Server on http://localhost:5000..."
cd "$SCRIPT_DIR/server"
npm run dev > server.log 2>&1 &
SERVER_PID=$!
echo "✅ Server started (PID: $SERVER_PID)"

sleep 3

# Start the client in background
echo "[4/4] Starting Client on http://localhost:5173..."
cd "$SCRIPT_DIR/client"
npm run dev > client.log 2>&1 &
CLIENT_PID=$!
echo "✅ Client started (PID: $CLIENT_PID)"

echo ""
echo "========================================"
echo "✅ SUCCESS! System is running..."
echo "========================================"
echo ""
echo "🌐 Frontend: http://localhost:5173"
echo "🔗 Backend:  http://localhost:5000"
echo ""
echo "Default Login Credentials:"
echo "📧 Email: test-visitor@gmail.com"
echo "🔑 Password: pass123"
echo ""
echo "📋 Logs:"
echo "  Server: $SCRIPT_DIR/server/server.log"
echo "  Client: $SCRIPT_DIR/client/client.log"
echo ""
echo "To stop the servers, run: kill $SERVER_PID $CLIENT_PID"
echo ""
