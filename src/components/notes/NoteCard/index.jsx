import './NoteCard.css'
import NoteDetailsContent from "../NoteContent";
import {useNotes} from "../../../contexts/NotesContext";

function NoteCard({ noteId, open}) {
    const notes = useNotes()
    const note = notes.get(noteId)

    return (
        <div className="note-card" onClick={() => open(note)}>
            <NoteDetailsContent value={note.content} size={0.75} />
        </div>
    )
}

export default NoteCard