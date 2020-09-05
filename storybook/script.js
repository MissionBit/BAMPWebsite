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
    const div = $('<div>').addClass('sbPage').append(titlebar(), inner)
    return div
}


for (const section of $('.demo')) {
    const contents = $(section).children()
    const h1text = contents[0].classList[0]

    $(section).empty().append([
        heading(h1text),
        page(contents)
    ])
}
