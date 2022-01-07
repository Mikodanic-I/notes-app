import './NoteCard.css'
import NoteDetailsContent from "../NoteContent";

function NoteCard({ value }) {
    return (
        <div className="note-card">
            <NoteDetailsContent value={value.content} />
        </div>
    )
}

export default NoteCard