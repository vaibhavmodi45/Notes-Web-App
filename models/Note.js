const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    // Add other fields like subject, tags, etc.
});

module.exports = mongoose.model('Note', noteSchema);