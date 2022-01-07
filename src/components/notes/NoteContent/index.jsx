import './NoteDetailsContent.css'
import ReactMarkdown from "react-markdown";

function NoteDetailsContent({ value, size=1 }) {

        return (
            <div style={{transform: `scale(${size})`}}>
                    <ReactMarkdown >{value}</ReactMarkdown>
            </div>
        )
}

export default NoteDetailsContent