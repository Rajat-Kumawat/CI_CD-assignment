const express = require('express');
const axios = require('axios'); // You'll need to install axios
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        // In a real EC2 setup, replace 'localhost' with your EC2 Public IP 
        // if accessing from a browser, or keep localhost if server-side calling.
        const response = await axios.get('http://16.170.159.222:5000/api/data');
        res.send(`
            <h1>Express Frontend</h1>
            <p>Status: Connected to Backend</p>
            <pre>${JSON.stringify(response.data, null, 2)}</pre>
        `);
    } catch (error) {
        res.send('<h1>Express Frontend</h1><p>Status: Backend Unreachable</p>');
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Frontend running at http://0.0.0.0:${port}`);
});