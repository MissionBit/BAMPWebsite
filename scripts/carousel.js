function setup(carousel) {
    const items = carousel.querySelector(".carousel--items");
    
    items.setAttribute("alt", 0);
    let nextBtn = carousel.querySelector(".carousel--next");
    let prevBtn = carousel.querySelector(".carousel--prev");

    setupDots(carousel, items.querySelectorAll(".carousel--item").length);
    let dots = carousel.querySelector(".carousel--dots");
    updateItems(items, dots);

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
}

function updateItems(items, dots) {
    let index = parseInt(items.getAttribute("alt"), 10);
    items = items.querySelectorAll(".carousel--item");
    for (let i = 0; i < items.length; i++) {
        if (i != index) {
            items[i].classList.add("carousel--item-hide");
            if (dots != null) {
                dots.children[i].classList.remove("carousel--dot-active");
            }
        } else {
            items[i].classList.remove("carousel--item-hide");
            if (dots != null) {
                dots.children[i].classList.add("carousel--dot-active");
            }
        }
    }
}

function setupDots(carousel, itemsCount) {
    if (itemsCount > 8) {return}
    let dots = document.createElement("DIV");
    dots.className = "carousel--dots";
    carousel.appendChild(dots);
    for (let i = 0; i < itemsCount; i++) {
        const dot = document.createElement("DIV");
        dots.appendChild(dot);
        dot.addEventListener("click", dotButton);
    }
}

function dotButton() {
    const dot = this
    const dots = dot.parentElement;
    const items = dots.parentElement.querySelector(".carousel--items");
    let index = Array.from(dots.children).indexOf(dot);
    items.setAttribute("alt", index);
    updateItems(items, dots);
}

function next() {
    const items = this.parentElement;
    const dots = items.parentElement.querySelector(".carousel--dots");
    console.log("Lol")
    let index = parseInt(items.getAttribute("alt"), 10);
    index = index + 1;
    if ((items.querySelectorAll(".carousel--item").length) == index) {
        index = 0;
    }
    items.setAttribute("alt", index);
    updateItems(items, dots);
}

function prev() {
    const items = this.parentElement;
    const dots = items.parentElement.querySelector(".carousel--dots");
    let index = parseInt(items.getAttribute("alt"), 10);
    index = index - 1;
    if (index < 0) {
        index = items.querySelectorAll(".carousel--item").length -1;
    }
    items.setAttribute("alt", index);
    updateItems(items, dots);
}

const carousels = document.querySelectorAll(".carousel");

for (const carousel of carousels) {
    setup(carousel);
}
