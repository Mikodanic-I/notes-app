import './NoteCard.css'

function NoteCard({ value }) {
    return (
        <div className="note-card">
            {value.content}
        </div>
    )
}

export default NoteCard