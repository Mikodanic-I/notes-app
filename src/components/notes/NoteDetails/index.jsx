import './NoteDetails.css'
import NoteDetailsToolbar from "../NoteDetailsToolbar";
import Dialog from "../../core/Dialog";
import NoteContent from "../NoteContent";
import { useNotes } from "../../../contexts/NotesContext";
import { useEffect, useState } from "react";

function NoteDetails() {
    const [note, setNote] = useState({})
    const [editable, setEditable] = useState(false)

    const { openedNote } = useNotes()

    useEffect(() => {
        if (openedNote.fromCreate) setEditable(true)

        const note = {
            id: openedNote.id,
            content: openedNote.content
        }
        setNote(note)
    }, [])


    const setNoteContent = (event) => {
        const content = event.target.value
        setNote({ id: note.id, content })
    }

    const NotePreview = editable
        ? <textarea
            value={note.content}
            className="note-details__text-area"
            rows="40"
            onChange={setNoteContent}
        />
        : <NoteContent value={note.content} />

    return (
        <Dialog>
            <div className="note-details">
                <NoteDetailsToolbar editable={editable} setEditable={setEditable} note={note} />
                { NotePreview }
            </div>
        </Dialog>
    )
}

export default NoteDetails