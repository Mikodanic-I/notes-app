function Icon({ name }) {
    // TODO: find a better solution for this
    const icons = {
        'icon-back': require(`../../assets/icons/icon-back.svg`),
        'icon-delete': require(`../../assets/icons/icon-delete.svg`),
        'icon-edit': require(`../../assets/icons/icon-edit.svg`),
        'icon-save': require(`../../assets/icons/icon-save.svg`),
    }

    const { ReactComponent: IconSvg } = icons[name]
    return <IconSvg />
}

export default Icon