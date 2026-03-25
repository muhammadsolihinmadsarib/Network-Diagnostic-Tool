# Network Diagnostic Tool

A professional web-based utility designed to streamline network connectivity testing. This application provides a clean, modern interface for performing system-level ping commands through a Node.js bridge.

## Overview

This tool was developed to bridge the gap between a user-friendly web interface and low-level system diagnostics. It allows users to verify network stability and troubleshoot connectivity issues without needing to interact directly with the command line.

### Key Features
* **Modern Interface:** Clean, minimalist white theme designed for high readability and professional use.
* **Real-Time Feedback:** Dynamic status indicators for "Success," "Analyzing," or "Unreachable."
* **System Integration:** Executes native system ping commands via a secure Node.js backend.
* **User-Centric Design:** Simple one-click launch capability for streamlined workflows.

## Project Structure

* `server.js`: The Node.js backend handling system commands, security validation, and API routing.
* `index.html`: The clean, responsive dashboard interface.
* `Start_Ping_Tool.bat`: A quick-launch script to start the server and UI simultaneously.
* `package.json`: Manages project dependencies and application metadata.

## Getting Started

### Prerequisites
* **Node.js:** Ensure you have Node.js installed on your system.

### Installation
1. Clone or download this repository to your local machine.
2. Open your terminal in the project folder.
3. Install the required dependencies:
   ```bash
   npm install

### Running the Tool

There are two ways to start the application:

**1. The Automated Way (Recommended):**

Double-click the Start_Ping_Tool.bat file. This will automatically start the backend server and open the tool in your default browser.

**2. The Manual Way:**

Start the server using Node:
```bash
node server.js
```

Then open your browser and navigate to `http://localhost:3000`.

### Technical Background

The application uses Express.js for the backend server and the Child Process module to interact with the system's native command utility. The frontend is built with modern CSS and asynchronous JavaScript (Fetch API) to ensure a smooth, non-blocking user experience and instant interface updates.