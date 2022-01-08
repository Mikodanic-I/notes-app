import './NoteDetailsToolbar.css'
import Icon from "../../core/Icon";
import {useNotes} from "../../../contexts/NotesContext";

function NoteDetailsToolbar({ editable, setEditable, note, close }) {
    const notes = useNotes()

    const currentStateIcon = editable ? 'icon-save' : 'icon-edit'
    const saveAction = () => {
        if (editable) notes.save(note.id, note)

        setEditable(!editable)
    }

    const removeNote = () => {
        if (note.id) notes.remove(note.id)

        close()
    }

    return (
        <div className="note-details-toolbar">
            <Icon name="icon-back" className="note-details-toolbar__back" onClick={close} />
            <div className="note-details-toolbar__actions">
                <Icon name={currentStateIcon} className="note-details-toolbar__save" onClick={saveAction} />
                <Icon name="icon-remove" className="note-details-toolbar__remove" onClick={removeNote}/>
            </div>
        </div>
    )
}

export default NoteDetailsToolbar