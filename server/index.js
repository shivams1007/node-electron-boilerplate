const express = require('express');
const app = express();
const port = 9000;

// GET route
app.get('/', (req, res) => {
    res.json({ message: 'Server Working!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});
