import './NoteDetails.css'
import NoteDetailsToolbar from "../NoteDetailsToolbar";
import Dialog from "../../core/Dialog";
import NoteDetailsContent from "../NoteDetailsContent";

function NoteDetails() {
    const note = { id: 'uuid-123', content: 'test123' }
    return (
        <Dialog>
            <div className="note-details">
                <NoteDetailsToolbar />
                <NoteDetailsContent value={note.content} />
            </div>
        </Dialog>
    )
}

export default NoteDetails