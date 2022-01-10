import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {useNotes} from "../modules/Notes";

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

const connectNotes = (ListComponent, DetailsComponent) => {
    return () => {
        const [localNotes, setLocalNotes] = useReducer(localNotesReducer, [])
        const [openedNote, setOpenedNote] = useState(null)

        const notes = useNotes()

        useEffect(() => {
            setLocalNotes({ payload: notes.getAll() })
        }, [])

        const open = useCallback((id, mode) => {
            const note = notes.get(id)

            setOpenedNote({ ...note, mode })
        }, [])

        const close = useCallback(() => {
            setOpenedNote(null)
        }, [])

        const add = useCallback((note) => {
            const addedNote = notes.add(note)

            open(addedNote.id, 'edit')

            setLocalNotes({ payload: addedNote, type: 'add' })
        }, [localNotes])

        const save = useCallback((id, updatedNote) => {
            const savedNote = notes.save(id, updatedNote)

            setLocalNotes({ payload: savedNote, type: 'edit' })
        }, [localNotes])

        const remove = useCallback((id) => {
            notes.remove(id)
            setLocalNotes({ payload: id, type: 'remove' })

            close()
        }, [localNotes])

       return (
           <div>
               <ListComponent
                   localNotes={localNotes}
                   add={add}
                   open={open}
               />
               <DetailsComponent openedNote={openedNote} save={save} remove={remove} close={close} />
           </div>
       )
    }
};

export default connectNotes;