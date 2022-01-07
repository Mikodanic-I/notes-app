import './NoteCard.css'
import NoteDetailsContent from "../NoteContent";
import {useNotes} from "../../../contexts/NotesContext";

function NoteCard({ noteId }) {
    const notes = useNotes()
    const note = notes.get(noteId)

    return (
        <div className="note-card" onClick={() => notes.edit(note)}>
            <NoteDetailsContent value={note.content} />
        </div>
    )
}

export default NoteCard