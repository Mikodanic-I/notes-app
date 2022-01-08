import NotesList from "./views/NotesList";
import NoteDetails from "./views/NoteDetails";
import {useEffect, useState} from "react";
import {useNotes} from "./modules/Notes";

function App() {
    const [localNotes, setLocalNotes] = useState([])
    const [openedNote, setOpenedNote] = useState(null)

    const notes = useNotes()

    useEffect(() => {
        setLocalNotes(notes.getAll())
    }, [])

    const open = (note) => {
        setOpenedNote(note)
    }
    const close = () => {
        setOpenedNote(null)
    }

    const add = (note) => {
        const addedNote = notes.add(note)

        open({ ...addedNote, fromCreate: true })

        setLocalNotes([addedNote, ...localNotes ])
    }
    const save = (id, updatedNote) => {
        const savedNote = notes.save(id, updatedNote)

        const updatedLocalNotes = localNotes.map(note => note.id === id ? savedNote : note)
        setLocalNotes(updatedLocalNotes)
    }
    const remove = (id) => {
        notes.remove(id)

        const updatedLocalNotes = localNotes.filter(note => note.id !== id)
        setLocalNotes(updatedLocalNotes)

        close()
    }

    return (
        <div>
            <NotesList
                localNotes={localNotes}
                add={add}
                open={open}
            />
            {openedNote && <NoteDetails openedNote={openedNote} save={save} remove={remove} close={close} />}
        </div>
    );
}

export default App;
