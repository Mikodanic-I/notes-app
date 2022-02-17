import React, {useEffect} from "react";

import './NotesList.css'
import NoteCard from "../../components/notes/NoteCard";
import connectNotes from "../../hoc/connectNotes";

const AddButton = React.memo(({ add }) => {
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
})

const NotesList = React.memo(({ localNotes, open, add }) => {
    const NoteCards = localNotes.map(note => <NoteCard key={note.id} id={note.id} content={note.content} open={open} />)

    return (
        <div className="notes-list">
            <AddButton add={add} />
            {NoteCards}
        </div>
    )
})

export default connectNotes(NotesList)