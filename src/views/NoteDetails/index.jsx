import './NoteDetails.css'
import NoteDetailsToolbar from "../../components/notes/NoteDetailsToolbar";
import Dialog from "../../components/core/Dialog";
import NoteContent from "../../components/notes/NoteContent";
import { useEffect, useState } from "react";

function NoteDetails({ openedNote, close, save, remove }) {
    const [note, setNote] = useState({})
    const [editable, setEditable] = useState(false)

    useEffect(() => {
        if (!openedNote) return
        if (openedNote.fromCreate) setEditable(true)

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
        <Dialog opened={!!openedNote}>
            <div className="note-details">
                <NoteDetailsToolbar
                    editable={editable}
                    setEditable={setEditable}
                    save={save}
                    remove={remove}
                    note={note}
                    close={close}
                />
                { NotePreview }
            </div>
        </Dialog>
    )
}

export default NoteDetails