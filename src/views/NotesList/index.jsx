import './NotesList.css'
import NoteCard from "../../components/notes/NoteCard";
import { useNotes } from "../../contexts/NotesContext";

function NotesList({ open }) {
    const notes = useNotes()
    const initialContent =
        'This is a note\n' +
        '==============\n' +
        '\n' +
        'Subtitle\n' +
        '--------\n' +
        '\n' +
        '\n' +
        'Shopping list:\n' +
        '* apples\n' +
        '* oranges\n' +
        '* toilet paper\n'

    const notesIds = notes.getAllIds()
    const NoteCards = notesIds.map(noteId => <NoteCard key={noteId} noteId={noteId} open={open} />)

    const addNote = () => {
        const newNote = notes.add(initialContent)
        open({ ...newNote, fromCreate: true })
    }
    return (
        <div className="notes-list">
            <div className="notes-list__add-card" onClick={addNote}>+</div>
            {NoteCards}
        </div>
    )
}

export default NotesList