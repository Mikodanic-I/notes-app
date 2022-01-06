import './NoteDetailsToolbar.css'
import Icon from "../../core/Icon";

function NoteDetailsToolbar() {
    return (
        <div className="note-details-toolbar">
            <Icon name="icon-back" />
            <div className="note-details-toolbar__actions">
                <Icon name="icon-edit" />
                <Icon name="icon-delete" />
            </div>
        </div>
    )
}

export default NoteDetailsToolbar