import './Dialog.css'

function Dialog({ opened, children }) {
    if (!opened) return null

    return (
        <div className="dialog">
            <div className="dialog-content">
                {children}
            </div>
        </div>
    )
}

export default Dialog