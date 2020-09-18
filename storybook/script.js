const heading = text =>
    $('<h1>').addClass('sbHeading').text(text)

const button = color =>
    $('<div>').addClass(`sbPage--${color}Btn`)

const titlebar = () =>
    $('<div>')
        .addClass('sbPage--titlebar')
        .append(['red', 'yellow', 'green'].map(c => button(c)))

const page = contents => {
    const inner = $('<div>').addClass('sbPage--inner').append(contents)
    return $('<div>').addClass('sbPage').append(titlebar(), inner)
}

const bookmark = moduleName =>
    $('<a>').prop('name', moduleName)

const navItem = moduleName => {
    const item = $('<li>').addClass('sbNavList--item')
    const link = $('<a>').prop('href', '#' + moduleName).text(moduleName)
    return item.append(link)
}


const nav = $('nav ul')

for (const section of $('.demo')) {
    const contents = $(section).children()
    const moduleName = $(section).data('module-name')

    $(section).empty().append([
        bookmark(moduleName),
        heading(moduleName),
        page(contents)
    ])

    $(nav).append(navItem(moduleName))
}
