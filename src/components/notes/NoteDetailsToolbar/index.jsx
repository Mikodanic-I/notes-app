import './NoteDetailsToolbar.css'
import Icon from "../../core/Icon";
import {useNotes} from "../../../contexts/NotesContext";

function NoteDetailsToolbar({ editable, setEditable, note }) {
    const notes = useNotes()

    const currentStateIcon = editable ? 'icon-save' : 'icon-edit'
    const saveCallback = () => {
        if (editable) notes.save(note.id, note)

        setEditable(!editable)
    }

    const removeNote = () => {
        if (note.id) notes.remove(note.id)

        notes.cancel()
    }
    return (
        <div className="note-details-toolbar">
            <Icon name="icon-back" onClick={() => notes.cancel()} />
            <div className="note-details-toolbar__actions">
                <Icon name={currentStateIcon} onClick={saveCallback} />
                <Icon name="icon-remove" onClick={removeNote}/>
            </div>
        </div>
    )
}

export default NoteDetailsToolbar