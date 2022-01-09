import './Dialog.css'

const Dialog = ({ opened, children, width }) => {
    if (!opened) return null

    return (
        <div className="dialog">
            <div className="dialog-content" style={{width}}>
                {children}
            </div>
        </div>
    )
}

export default Dialog