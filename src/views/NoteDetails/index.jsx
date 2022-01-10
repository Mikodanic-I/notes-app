import React from 'react'

import './NoteDetails.css'
import NoteDetailsToolbar from "../../components/notes/NoteDetailsToolbar";
import Dialog from "../../components/core/Dialog";
import NoteContent from "../../components/notes/NoteContent";
import { useEffect, useState } from "react";
import connectNotes from "../../hoc/connectNotes";

const NoteDetails = ({ openedNote }) => {
    const [note, setNote] = useState({})
    const [editable, setEditable] = useState(false)

    useEffect(() => {
        if (!openedNote) return
        if (openedNote.mode === 'edit') setEditable(true)

        const note = {
            id: openedNote.id,
            content: openedNote.content
        }
        setNote(note)

        return () => {
            setNote({})
            setEditable(false)
        }
    }, [openedNote])


    const setNoteContent = (event) => {
        const content = event.target.value
        setNote({ id: note.id, content })
    }

    const WrappedNoteContent = <div className="note-details__preview"> <NoteContent value={note.content} /> </div>

    const NoteDetailsBody = editable
        ? <textarea
            value={note.content}
            className="note-details__text-area"
            rows="40"
            onChange={setNoteContent}
        />
        : WrappedNoteContent

    return (
        <Dialog opened={!!openedNote} width="800px">
            <div className="note-details">
                <NoteDetailsToolbar
                    editable={editable}
                    setEditable={setEditable}
                    note={note}
                />
                { NoteDetailsBody }
            </div>
        </Dialog>
    )
}

export default connectNotes(NoteDetails, 'details')