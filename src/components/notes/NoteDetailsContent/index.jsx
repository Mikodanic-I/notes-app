import './NoteDetailsContent.css'

function NoteDetailsContent({ value, mode = 'view' }) {

    const defaultNote = "This is a note\n" +
        "==============\n" +
        "\n" +
        "Subtitle\n" +
        "--------\n" +
        "\n" +
        "\n" +
        "Shopping list:\n" +
        "* apples\n" +
        "* oranges\n" +
        "* toilet paper\n"

    if (mode === 'edit') {
        return <textarea value={defaultNote} className="note-details-content__text-area" rows="40" />
    }

    if (mode === 'view') {
        return <div>{value}</div>
    }
}

export default NoteDetailsContent