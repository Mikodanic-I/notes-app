import './NoteDetails.css'
import NoteDetailsToolbar from "../NoteDetailsToolbar";
import Dialog from "../../core/Dialog";
import NoteContent from "../NoteContent";
import { useEffect, useState } from "react";

function NoteDetails({ openedNote, close }) {
    const [note, setNote] = useState({})
    const [editable, setEditable] = useState(false)

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

    const contentPreview = <div className="note-details__preview"> <NoteContent value={note.content} /> </div>
    const NotePreview = editable
        ? <textarea
            value={note.content}
            className="note-details__text-area"
            rows="40"
            onChange={setNoteContent}
        />
        : contentPreview

    return (
        <Dialog>
            <div className="note-details">
                <NoteDetailsToolbar editable={editable} setEditable={setEditable} note={note} close={close}/>
                { NotePreview }
            </div>
        </Dialog>
    )
}

export default NoteDetails