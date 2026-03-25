@echo off
title IP Ping Tool Launcher
echo Starting Backend Server...
:: This starts the server in the background
start /min node server.js
:: Wait 2 seconds for the server to wake up
timeout /t 2 /nobreak >nul
echo Opening Dashboard...
:: This opens your tool in the browser
start http://localhost:3000
exit