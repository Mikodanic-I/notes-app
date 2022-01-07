import NotesList from "./views/NotesList";
import NoteDetails from "./components/notes/NoteDetails";
import {useNotes} from "./contexts/NotesContext";

function App() {
    const { openedNote } = useNotes()

    return (
        <div className="App">
            <NotesList />
            {openedNote && <NoteDetails />}
        </div>
    );
}

export default App;
