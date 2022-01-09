const Icon = ({ name, ...DOMprops }) => {
    // TODO: find a better solution for this
    const icons = {
        'icon-back': require(`../../assets/icons/icon-back.svg`),
        'icon-remove': require(`../../assets/icons/icon-remove.svg`),
        'icon-edit': require(`../../assets/icons/icon-edit.svg`),
        'icon-save': require(`../../assets/icons/icon-save.svg`),
    }

    const { ReactComponent: IconSvg } = icons[name]
    return <span {...DOMprops}> <IconSvg /> </span>
}

export default Icon