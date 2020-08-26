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
function makeTitlebars() {
  const pages = document.getElementsByClassName("sbPage")

  for (const page of pages) {
    const bar = document.createElement("div")
    bar.className = ("sbPage--bar")
    page.insertBefore(bar, page.firstChild)
    addButtons(bar)
  }
}

makeTitlebars()
