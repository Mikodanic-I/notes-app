import './NoteDetailsToolbar.css'
import Icon from "../../core/Icon";

function NoteDetailsToolbar({ editable, setEditable, note, save, remove, close }) {
    const currentStateIcon = editable ? 'icon-save' : 'icon-edit'
    const saveAction = () => {
        if (editable) save(note.id, note)

        setEditable(!editable)
    }

    return (
        <div className="note-details-toolbar">
            <Icon
                name="icon-back"
                className="note-details-toolbar__back"
                onClick={close}
            />
            <div className="note-details-toolbar__actions">
                <Icon
                    name={currentStateIcon}
                    className="note-details-toolbar__save"
                    onClick={saveAction} />
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