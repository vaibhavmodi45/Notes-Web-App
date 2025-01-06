import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function NoteList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/notes');
                setNotes(response.data);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, []);

    return (
        <ul>
            {notes.map((note) => (
                <li key={note._id}>
                    <Link to={`/notes/${note._id}`}>{note.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default NoteList;