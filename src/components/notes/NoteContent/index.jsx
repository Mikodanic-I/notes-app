import './NoteContent.css'
import ReactMarkdown from "react-markdown";

function NoteDetailsContent({ value, size=1 }) {
    const sizeStyling = {
        transform: `scale(${size})`,
        transformOrigin: 'top left',
        width: `${100 / size}%` // keeps width 100% all the time
    }
    return (
        <div style={sizeStyling}>
            <ReactMarkdown>{value}</ReactMarkdown>
        </div>
    )
}

export default NoteDetailsContent