import './NoteDetails.css'
import NoteDetailsToolbar from "../NoteDetailsToolbar";
import Dialog from "../../core/Dialog";
import NoteContent from "../NoteContent";

function NoteDetails() {
    const note = { id: 'uuid-123', content: 'test123' }
    const isEdit = false;

    const NotePreview = isEdit
        ? <textarea value={note.content} className="note-details__text-area" rows="40" />
        : <NoteContent value={note.content} />

    return (
        <Dialog>
            <div className="note-details">
                <NoteDetailsToolbar />
                { NotePreview }
            </div>
        </Dialog>
    )
}

export default NoteDetails