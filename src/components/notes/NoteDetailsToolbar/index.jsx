import './NoteDetailsToolbar.css'
import Icon from "../../core/Icon";
import { useNotes } from "../../../modules/Notes";

const NoteDetailsToolbar = ({ editable, setEditable, note }) => {
    const { save, remove, close } = useNotes('details')

    const saveAction = () => {
        save(note.id, note)
        setEditable(false)
    }

    const SaveIcon = <Icon name="icon-save" className="note-details-toolbar__save" onClick={saveAction}/>
    const EditIcon = <Icon name="icon-edit"
                           className="note-details-toolbar__edit"
                           onClick={() => setEditable(true)} />

    return (
        <div className="note-details-toolbar">
            <Icon
                name="icon-back"
                className="note-details-toolbar__back"
                onClick={close}
            />
            <div className="note-details-toolbar__actions">
                {editable ? SaveIcon : EditIcon}
                <Icon
                    name="icon-remove"
                    className="note-details-toolbar__remove"
                    onClick={() => remove(note.id)}
                />
            </div>
        </div>
    )
}

export default NoteDetailsToolbar