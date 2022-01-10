import React, {useContext, createContext, useReducer, useState, useEffect, useCallback} from "react";

const NotesContext = createContext(null)

const localNotesReducer = (state, { type, payload }) => {
    switch (type) {
        case 'add':
            return [payload, ...state]
        case 'edit':
            return state.map(note => note.id === payload.id ? payload : note)
        case 'remove':
            return state.filter(note => note.id !== payload)
        default:
            return payload
    }
}

const NotesProvider = ({ children }) => {
    const [localNotes, setLocalNotes] = useReducer(localNotesReducer, [])
    const [openedNote, setOpenedNote] = useState(null)

    useEffect(() => {
        setLocalNotes({ payload: StorageNotes() })
    }, [])

    const StorageNotes = () => {
        const notes = localStorage.getItem('notes')

        if (!notes) return []
        return JSON.parse(notes)
    }
    const setStorageNotes = (notes) => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }

    const get = useCallback((id) => {
        const foundNote = StorageNotes().find(note => note.id === id)

        return foundNote || null
    }, [])

    const add = useCallback((initialContent) => {
        const id = `id-${Date.now()}`
        const note = { id, content: initialContent }

        const updatedNotes = [note, ...StorageNotes()]
        setStorageNotes(updatedNotes)

        setLocalNotes({ payload: note, type: 'add' })

        open(note.id, 'edit')
    }, [])

    const save = useCallback((id, updatedNote) => {
        const updatedNotes = StorageNotes().map(note => note.id === id ? updatedNote : note)
        setStorageNotes(updatedNotes)

        setLocalNotes({ payload: updatedNote, type: 'edit' })
    }, [])

    const remove = useCallback((id) => {
        const updatedNotes = StorageNotes().filter(note => note.id !== id)
        setStorageNotes(updatedNotes)

        setLocalNotes({ payload: id, type: 'remove' })

        close()
    }, [])

    const open = useCallback((id, mode) => {
        const note = get(id)

        setOpenedNote({ ...note, mode })
    }, [])

    const close = useCallback(() => {
        setOpenedNote(null)
    }, [])


    const value = { get, add, save, remove, open, close, localNotes, openedNote }
    return (
        <NotesContext.Provider value={value}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext)


export { NotesProvider, useNotes }