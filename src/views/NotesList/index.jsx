import './NotesList.css'
import NoteCard from "../../components/notes/NoteCard";

function NotesList() {
    const noteDummyValue = {id: 'uuid-123', content: 'Testara'}
    return (
        <div className="notes-list">
            <div className="notes-list__add-card">+</div>
            <NoteCard value={noteDummyValue} />
        </div>
    )
}

export default NotesList