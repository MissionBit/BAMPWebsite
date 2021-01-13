function setup(carousel) {
    const items = carousel.querySelector(".carousel--items")
    items.dataset.index = 0
    let nextBtn = carousel.querySelector(".carousel--next")
    let prevBtn = carousel.querySelector(".carousel--prev")
    let dots = setupDots(carousel, items.querySelectorAll(".carousel--item").length)
    updateItems(items, dots)
    nextBtn.addEventListener('click', next)
    prevBtn.addEventListener('click', prev)
    const interval = 20
    setInterval(itemLoop, interval * 1000, items, dots)
}

function updateItems(items, dots) {
    let index = parseInt(items.dataset.index, 10)
    items = items.querySelectorAll(".carousel--item")
    for (let i = 0; i < items.length; i++) {
        if (i != index) {
            items[i].classList.add("carousel--item-is-hidden")
            if (dots) {
                dots.children[i].classList.remove("carousel--dot-is-active")
            }
        } else {
            items[i].classList.remove("carousel--item-is-hidden")
            if (dots) {
                dots.children[i].classList.add("carousel--dot-is-active")
            }
        }
    }
}

function setupDots(carousel, itemsCount) {
    if (itemsCount > 8) {
        return
    }
    let dots = document.createElement("DIV")
    dots.className = "carousel--dots"
    carousel.appendChild(dots)
    for (let i = 0; i < itemsCount; i++) {
        const dot = document.createElement("DIV")
        dots.appendChild(dot)
        dot.dataset.indexDot = i
        dot.addEventListener("click", dotButton)
    }
    return dots
}

function dotButton(event) {
    const dot = event.target
    const dots = dot.parentElement
    const items = dots.parentElement.querySelector(".carousel--items")
    let index = dot.dataset.indexDot
    items.dataset.index = index
    updateItems(items, dots)
}

function itemLoop(items, dots) {
    let index = parseInt(items.dataset.index, 10)
    index = (index + 1) % items.querySelectorAll(".carousel--item").length
    items.dataset.index = index
    updateItems(items, dots)
}

function next() {
    const items = this.parentElement
    const dots = items.parentElement.querySelector(".carousel--dots")
    let index = parseInt(items.dataset.index, 10)
    index = (index + 1) % items.querySelectorAll(".carousel--item").length
    items.dataset.index = index
    updateItems(items, dots)
}

function prev() {
    const items = this.parentElement
    const dots = items.parentElement.querySelector(".carousel--dots")
    let index = parseInt(items.dataset.index, 10)
    const length = items.querySelectorAll(".carousel--item").length
    index = (length + index - 1) % length
    items.dataset.index = index
    updateItems(items, dots)
}

const carousels = document.querySelectorAll(".carousel")

for (const carousel of carousels) {
    setup(carousel)
}
