import React, {useState, useContext, createContext} from "react";

const NotesContext = createContext(null)

function NotesProvider({ children }) {
    const [notes, setNotes] = useState([])
    const [currentNote, setCurrentNote] = useState(null)

    const getAll = () => notes
    const get = (id) => {
        const foundNote = notes.find(note => note.id === id)

        return foundNote || null
    }

    const add = (note) => {
        const updatedNotes = [note, ...notes]
        setNotes(updatedNotes)
    }

    const edit = (editedNote) => {
        console.log(editedNote);

        const noteIndex = notes.findIndex(note => note.id === editedNote.id)

        if (noteIndex < 0) return

        const notesCopy = [...notes]
        const updatedNotes = notesCopy.splice(noteIndex, 1, editedNote)
        setNotes(updatedNotes)

        return editedNote
    }

    const remove = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id)
        setNotes(updatedNotes)
    }

    // OPENING STUFF....
    const open = (note) => {
        const content =
            'This is a note\n' +
            '\n' +
            'Subtitle\n' +
            '\n' +
            '\n' +
            'Shopping list:\n' +
            '  • apples\n' +
            '  • oranges\n' +
            '  • toilet paper\n'

        const defaultNote = { id: null, content }
        setCurrentNote(note || defaultNote)
    }

    const close = () => {
        setCurrentNote(null)
    }

    const value = { getAll, get, add, edit, remove, open, close, currentNote }
    return (
        <NotesContext.Provider value={value}>
            {children}
        </NotesContext.Provider>
    )
}

function useNotes() {
    return useContext(NotesContext)
}

export { NotesProvider, useNotes }