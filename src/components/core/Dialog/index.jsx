import './Dialog.css'

function Dialog({ children }) {
    return (
        <div className="dialog">
            <div className="dialog-content">
                {children}
            </div>
        </div>
    )
}

export default Dialog