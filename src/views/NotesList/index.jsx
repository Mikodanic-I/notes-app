import React from "react";

import './NotesList.css'
import NoteCard from "../../components/notes/NoteCard";

const AddButton = ({ add }) => {
    const initialContent =
        'This is a note\n' +
        '==============\n' +
        '\n' +
        'Subtitle\n' +
        '--------\n' +
        '\n' +
        '\n' +
        'Shopping list:\n' +
        '* apples\n' +
        '* oranges\n' +
        '* toilet paper\n'

    return <div className="notes-list__add-card" onClick={() => add(initialContent)}>+</div>
}

const NotesList = ({ localNotes, add, open }) => {
    const NoteCards = localNotes.map(note => <NoteCard key={note.id} note={note} open={open} />)

    return (
        <div className="notes-list">
            <AddButton add={add} />
            {NoteCards}
        </div>
    )
}

export default React.memo(NotesList)