const express = require('express');
const cors = require('cors');
const userRoutes = require('./controller/user_controller'); // Adjust the path as needed
const path = require('path');

const app = express();

app.use(cors());

//config request body
app.use(express.json());

//route declare
app.use('/api', userRoutes);

// Serve static files from the assets directory
app.use(express.static(path.join(__dirname, '..', 'Front_end', 'assets')));
console.log(path.join(__dirname, '..', 'Front_end', 'assets'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));