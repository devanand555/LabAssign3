const express = require('express');
const app = express();
const port = 3000;

// Set up a simple route for the home page
app.get('/', (req, res) => {
    const groupNames = ["Group A", "Group B", "Group C"];
    let html = `
        <html>
            <head>
                <title> Dev's Group </title>
            </head>
            <body>
                <h1> Anand's Group </h1>
                <ul>
                    ${groupNames.map(name => `<li>${name}</li>`).join('')}
                </ul>
            </body>
        </html>
    `;
    res.send(html);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
