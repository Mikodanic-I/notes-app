import React, {useCallback, useEffect, useState} from 'react';
import {useNotes} from "../modules/Notes";


const connectNotes = (ListComponent, DetailsComponent) => {
    return () => {
        const [localNotes, setLocalNotes] = useState([])
        const [openedNote, setOpenedNote] = useState(null)

        const notes = useNotes()

        useEffect(() => {
            setLocalNotes(notes.getAll())
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

            setLocalNotes([addedNote, ...localNotes ])
        }, [localNotes])

        const save = useCallback((id, updatedNote) => {
            const savedNote = notes.save(id, updatedNote)

            const updatedLocalNotes = localNotes.map(note => note.id === id ? savedNote : note)
            setLocalNotes(updatedLocalNotes)
        }, [localNotes])

        const remove = useCallback((id) => {
            notes.remove(id)

            const updatedLocalNotes = localNotes.filter(note => note.id !== id)
            setLocalNotes(updatedLocalNotes)

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