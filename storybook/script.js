/**
 * Makes a new button for the fake titlebar.
 */
function newButton(color) {
  const div = document.createElement("div")
  div.className = `sbDesktop--${color}Btn`
  return div
}

/**
 * Adds Mac-style buttons to the fake titlebar.
 */
function addButtons(bar) {
  const colors = ["red", "yellow", "green"]
  colors.forEach(c => bar.appendChild(newButton(c)))
}

/**
 * Makes the fake titlebars.
 */
function insertTitlebar(page) {
  const bar = document.createElement("div")
  bar.className = ("sbDesktop--titlebar")
  addButtons(bar)
  page.insertBefore(bar, page.firstChild)
}

/** Adds a heading to the section, with the module name. */
function insertHeading(section, text) {
  const h1 = document.createElement("h1")
  h1.className = "sbHeading"
  h1.innerText = text
  section.insertBefore(h1, section.firstChild)
}

/**
 * Makes the storybook "page" preview (desktop). Does this by moving
 * the contents of the <section> into a new container div.
 *
 * TODO: rename
 */
function addDesktopPage(section) {
  const contents = section.innerHTML
  const page = document.createElement("div")
  const className = section.children[0].className

  // build page
  page.className = "sbDesktop"
  page.innerHTML = contents
  insertTitlebar(page)

  section.innerHTML = ""
  section.appendChild(page)
  insertHeading(section, "." + className)
}

const sections = document.getElementsByClassName("demo")
for (const section of sections)
  addDesktopPage(section)
