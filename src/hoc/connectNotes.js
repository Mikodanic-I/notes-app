import { useNotes } from "../modules/Notes";

function selectValues(contextHook, view) {
    const { get, add, save, remove, open, close, localNotes, openedNote } = contextHook()

    if (view === 'details')
       return { get, save, remove, close, openedNote}
    else
        return { add, open, localNotes }
}

const connectNotes = (ConnectedComponent, view) => {
    return (props) => {
        const contextValues = selectValues(useNotes, view);

        return <ConnectedComponent {...contextValues} {...props} />
    };
}

export default connectNotes