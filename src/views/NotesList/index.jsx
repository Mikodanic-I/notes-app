import './NotesList.css'
import NoteCard from "../../components/notes/NoteCard";

function NotesList({ localNotes, add, open }) {
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

    const NoteCards = localNotes.map(note => <NoteCard key={note.id} note={note} open={open} />)

    return (
        <div className="notes-list">
            <div className="notes-list__add-card" onClick={() => add(initialContent)}>+</div>
            {NoteCards}
        </div>
    )
}

export default NotesList