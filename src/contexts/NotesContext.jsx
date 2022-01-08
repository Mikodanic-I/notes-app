import React, { useContext, createContext } from "react";

const NotesContext = createContext(null)

function NotesProvider({ children }) {
    const StorageNotes = () => {
        const notes = localStorage.getItem('notes')

        if (!notes) return []
        return JSON.parse(notes)
    }

    const setNotes = (notes) => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }

    const getAllIds = () => StorageNotes().map(note => note.id)

    const get = (id) => {
        const foundNote = StorageNotes().find(note => note.id === id)

        return foundNote || null
    }

    const add = (initialContent) => {
        const id = `id-${Date.now()}`
        const note = { id, content: initialContent }

        const updatedNotes = [note, ...StorageNotes()]
        setNotes(updatedNotes)

        return note
    }

    const save = (id, updatedNote) => {
        const updatedNotes = StorageNotes().map(note => note.id === id ? updatedNote : note)
        setNotes(updatedNotes)

        return { ...updatedNote, id }
    }

    const remove = (id) => {
        const updatedNotes = StorageNotes().filter(note => note.id !== id)
        setNotes(updatedNotes)
    }

    const value = { getAllIds, get, add, save, remove }
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