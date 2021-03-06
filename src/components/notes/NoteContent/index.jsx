import './NoteContent.css'
import ReactMarkdown from "react-markdown";

const NoteContent = ({ value, size=1 }) => {
    const sizeStyling = {
        transform: `scale(${size})`,
        transformOrigin: 'top left',
        width: `${100 / size}%` // keeps width 100% all the time
    }
    return (
        <div className="note-content" style={sizeStyling}>
            <ReactMarkdown>{value}</ReactMarkdown>
        </div>
    )
}

export default NoteContent