import NotesList from "./views/NotesList";
import NoteDetails from "./views/NoteDetails";
import connectNotes from "./hoc/connectNotes";

function App() {
    const NotesContainer = connectNotes(NotesList, NoteDetails)
    return <NotesContainer />;
}

export default App;
