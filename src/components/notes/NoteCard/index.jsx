import './NoteCard.css'
import NoteDetailsContent from "../NoteContent";

function NoteCard({ note, open }) {
    return (
        <div className="note-card" onClick={() => open(note)}>
            <NoteDetailsContent value={note.content} size={0.5} />
        </div>
    )
}

export default NoteCard