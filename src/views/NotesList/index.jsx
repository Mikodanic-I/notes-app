import './NotesList.css'
import NoteCard from "../../components/notes/NoteCard";
import { useNotes } from "../../contexts/NotesContext";

function NotesList() {
    const notes = useNotes()
    const initialContent =
        'This is a note\n' +
        '\n' +
        'Subtitle\n' +
        '\n' +
        '\n' +
        'Shopping list:\n' +
        '  • apples\n' +
        '  • oranges\n' +
        '  • toilet paper\n'

    const notesIds = notes.getAllIds()
    const NoteCards = notesIds.map(noteId => <NoteCard key={noteId} noteId={noteId}  />)
    return (
        <div className="notes-list">
            <div className="notes-list__add-card" onClick={() => notes.add(initialContent)}>+</div>
            {NoteCards}
        </div>
    )
}

export default NotesList