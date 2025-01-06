import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteList from '../Components/NoteList';
import NoteForm from '../Components/NoteForm';
import NoteDetails from '../Components/NoteDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NoteList />} />
                <Route path="/create" element={<NoteForm />} />
                <Route path="/notes/:id" element={<NoteDetails />} />
            </Routes>
        </Router>
    );
}

export default App;