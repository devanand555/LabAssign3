const express = require('express');
const app = express();
const PORT = 3000;

// Sample JSON data
const sampleData = {
    message: "Good morning everyone!",
    status: "success",
    data: {
        name: "Sample Data",
        description: "This is an example of JSON data"
    }
};

// Define a GET route to display the JSON data
app.get('/api/sample-data', (req, res) => {
    res.json(sampleData);
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});