import NotesListView from "./views/ListView";
import NoteDetails from "./components/notes/NoteDetails";

function App() {
    const isNoteOpen = true
    return (
        <div className="App">
            <NotesListView />
            {isNoteOpen && <NoteDetails />}
        </div>
    );
}

export default App;
