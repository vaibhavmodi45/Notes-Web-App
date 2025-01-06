const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes'); // Import routes

const app = express();
const port = process.env.PORT || 5000; // Port for the server

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/notes-db?directConnection=true', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/notes', notesRoutes); 

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});