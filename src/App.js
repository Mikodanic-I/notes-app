import NotesList from "./views/NotesList";
import NoteDetails from "./components/notes/NoteDetails";

function App() {
    const isNoteOpen = true
    return (
        <div className="App">
            <NotesList />
            {isNoteOpen && <NoteDetails />}
        </div>
    );
}

export default App;
