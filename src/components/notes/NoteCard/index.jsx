import './NoteCard.css'
import NoteContent from "../NoteContent";
import React, {useEffect, useState} from "react";
import {useNotes} from "../../../modules/Notes";

const findNote = (id) => {
    const notes = localStorage.getItem('notes')
    const parsedNotes = JSON.parse(notes)
    const foundNote = parsedNotes.find(note => note.id === id)

    if (!foundNote) return null

    return foundNote
}

const useCardStorage = (id) => {
    const initialNote = findNote(id)
    const [note, setNote] = useState(initialNote)

    const { addListener, removeListener } = useNotes()

    useEffect(() => {
        addListener(id, () => {
            setNote(findNote(id))
        })

        return () => {
            removeListener(id)
        }
    }, [])

    return note
}

const NoteCard = React.memo(({ id, content, open }) => {
    return (
        <div className="note-card" onClick={() => open(id, 'view')}>
            <NoteContent value={content} size={0.5} />
        </div>
    )
})

export default NoteCard