import './NoteCard.css'
import NoteContent from "../NoteContent";
import React from "react";

const NoteCard = ({ note, open }) => {
    return (
        <div className="note-card" onClick={() => open(note)}>
            <NoteContent value={note.content} size={0.5} />
        </div>
    )
}

export default React.memo(NoteCard)