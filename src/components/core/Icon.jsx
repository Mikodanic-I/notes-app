function Icon({ name }) {
    // TODO: find a better solution for this
    const icons = {
        'icon-back': require(`../../static/icons/icon-back.svg`),
        'icon-delete': require(`../../static/icons/icon-delete.svg`),
        'icon-edit': require(`../../static/icons/icon-edit.svg`),
        'icon-save': require(`../../static/icons/icon-save.svg`),
    }

    const { ReactComponent: IconSvg } = icons[name]
    return <IconSvg />
}

export default Icon