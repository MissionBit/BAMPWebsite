/**
 * Makes a new button for the fake titlebar.
 */
function newButton(color) {
  const div = document.createElement("div")
  div.className = `sbPage--${color}Btn`
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
function makeTitleBar(page) {
  const bar = document.createElement("div")
  bar.className = ("sbPage--titlebar")
  addButtons(bar)
  page.insertBefore(bar, page.firstChild)
}

const pages = document.getElementsByClassName("sbPage")
for (const page of pages)
  makeTitleBar(page)
