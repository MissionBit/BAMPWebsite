const heading = text =>
  $('<h1>').addClass('sbHeading').text(text)

const button = color =>
  $('<div>').addClass(`sbPage--${color}Btn`)

const titlebar = () =>
  $('<div>')
    .addClass('sbPage--titlebar')
    .append(['red', 'yellow', 'green'].map(c => button(c)))

const page = contents =>
  $('<div>').addClass('sbPage').append(titlebar(), contents)


for (const section of $('.demo')) {
  const contents = $(section).children()
  const h1text = contents.attr('class')

  $(section).empty().append([
    heading(h1text),
    page(contents)
  ])
}
