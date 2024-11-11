const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data to work with
let items = [
  { id: 1, name: "Dairy Milk" },
  { id: 2, name: "Milkybar" }
];

// CREATE - POST method
app.post('/items', (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ - GET method
app.get('/items', (req, res) => {
  res.json(items);
});

// UPDATE - PUT method
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (item) {
    item.name = req.body.name;
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE - DELETE method
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
