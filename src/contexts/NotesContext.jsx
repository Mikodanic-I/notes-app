import React, { useState, useContext, createContext } from "react";

const NotesContext = createContext(null)

function NotesProvider({ children }) {
    const [notes, setNotes] = useState([])
    const [openedNote, setOpenedNote] = useState(null)

    const getAllIds = () => notes.map(note => note.id)

    const get = (id) => {
        const foundNote = notes.find(note => note.id === id)

        return foundNote || null
    }

    const add = (initialContent) => {
        const id = `id-${Date.now()}`
        const note = { id, content: initialContent }

        const updatedNotes = [note, ...notes]
        setNotes(updatedNotes)

        // Temp value so NoteDetails opens edit mode straight away
        note.fromCreate = true
        edit(note)
    }

    const save = (id, updatedNote) => {
        const updatedNotes = notes.map(note => note.id === id ? updatedNote : note)
        setNotes(updatedNotes)
    }

    const remove = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id)
        setNotes(updatedNotes)
    }

    // Open details dialog
    const edit = (note) => {
        setOpenedNote(note)
    }
    // Close details dialog
    const cancel = () => {
        setOpenedNote(null)
    }

    const value = { getAllIds, get, add, save, remove, edit, cancel, openedNote }
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