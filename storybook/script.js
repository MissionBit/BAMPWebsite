const heading = text =>
  $('<h1>').addClass('sbHeading').text(text)

const button = color =>
  $('<div>').addClass(`sbDesktop--${color}Btn`)

const titlebar = () =>
  $('<div>')
    .addClass('sbDesktop--titlebar')
    .append(['red', 'yellow', 'green'].map(c => button(c)))

const desktop = contents =>
  $('<div>').addClass('sbDesktop').append(titlebar(), contents)


for (const section of $('.demo')) {
  const contents = $(section).children()
  const h1text = contents.attr('class')

  $(section).empty().append([
    heading(h1text),
    desktop(contents)
  ])
}
