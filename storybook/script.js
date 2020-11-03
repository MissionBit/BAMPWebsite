const { sortBy, pipe, prop } = R

const moduleName = pipe(prop('dataset'), prop('moduleName'))

const bookmark = name =>
    $('<a>').prop('name', `sb-${name}`)

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

const finishSection = demo => {
    const children = $(demo).children()

    $(demo).empty().append([
        bookmark(moduleName(demo)),
        heading(moduleName(demo)),
        page(children)
    ])
}

const navLink = name => {
    const item = $('<li>').addClass('sbNavList--item')
    const link = $('<a>').prop('href', `#sb-${name}`).text(name)
    return item.append(link)
}

const appendNavLink = demo =>
    $('ul.sbNavList').append(navLink(moduleName(demo)))

const reinsert = elem => {
    const parent = $(elem).parent()
    $(elem).remove()
    parent.append(elem)
}

for (const demo of sortBy(moduleName, $('.demo'))) {
    finishSection(demo)
    appendNavLink(demo)
    reinsert(demo)
}
