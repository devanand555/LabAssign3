Create a file named app.js
Express Boilerplate: The setup includes creating an Express app and setting a port.
GET Route at Root (/): A GET request at the root URL (/) renders an HTML page that displays group names in an unordered list.
Start Server: app.listen starts the server on http://localhost:3000.
Create an index.js
app.get('/api/sample-data', (req, res) => { ... }) defines a route /api/sample-data that returns sampleData JSON when accessed.
Create an index1.js file for the Express server code.
Open Postman and create a new POST request to http://localhost:3000/items.
In the Body tab, select raw and set it to JSON format.
Send the request. You should receive a 201 Created response with the new item added.
