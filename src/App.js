import NotesList from "./views/NotesList";
import NoteDetails from "./components/notes/NoteDetails";
import { useState } from "react";

function App() {
    const [openedNote, setOpenedNote] = useState(null)

    // Open details dialog
    const open = (note) => {
        setOpenedNote(note)
    }
    // Close details dialog
    const close = () => {
        setOpenedNote(null)
    }

    return (
        <div className="App">
            <NotesList open={open} />
            {openedNote && <NoteDetails openedNote={openedNote} close={close}/>}
        </div>
    );
}

export default App;
