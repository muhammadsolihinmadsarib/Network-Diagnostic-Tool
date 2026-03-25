const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve the UI automatically
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/ping', (req, res) => {
    const target = req.query.target;
    
    // Validate target
    if (!/^[a-zA-Z0-9.-]+$/.test(target)) {
        return res.status(400).send("Invalid IP or Domain");
    }

    console.log(`Checking connection to: ${target}`);

    // FIX: added { shell: true } so Windows recognizes the 'ping' command
    const ping = spawn('ping', [target], { shell: true });
    
    let outputData = "";
    let errorData = "";

    ping.stdout.on('data', (data) => {
        outputData += data.toString();
    });

    ping.stderr.on('data', (data) => {
        errorData += data.toString();
    });

    ping.on('error', (err) => {
        res.send(`System Error: ${err.message}`);
    });

    ping.on('close', (code) => {
        if (outputData) {
            res.send(outputData);
        } else {
            res.send(`Error: No response from system. ${errorData}`);
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`=================================`);
    console.log(`PING TOOL ACTIVE ON PORT ${PORT}`);
    console.log(`Open: http://localhost:${PORT}`);
    console.log(`=================================`);
});