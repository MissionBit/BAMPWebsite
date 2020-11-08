const carousel = document.querySelectorAll(".carousel");

for (let i = 0; i < carousel.length; i++) {
    const current_carousel = carousel[i];
    const carousel_items = current_carousel.querySelector(".carousel--items");
    let carousel_dots = current_carousel.querySelector(".carousel--dots");
    carousel_items.setAttribute("alt", 0);
    let next_btn = current_carousel.querySelector(".carousel--next");
    let prev_btn = current_carousel.querySelector(".carousel--prev");
    
    update_items(carousel_items, carousel_dots);
    setup_dots(carousel_dots, carousel_items.children.length);

    next_btn.addEventListener('click', next);
    prev_btn.addEventListener('click', prev);
}

function update_items(carousel_items, carousel_dots) {
    let index = parseInt(carousel_items.getAttribute("alt"), 10);
    carousel_items = carousel_items.children;
    for (let i = 0; i < carousel_items.length; i++) {
        if (i != index) {
            carousel_items[i].classList.add("carousel--item-hide");
            if (carousel_dots.children[i] != null) {
                carousel_dots.children[i].classList.remove("carousel--dot-active");
            }
        } else {
            carousel_items[i].classList.remove("carousel--item-hide");
            if (carousel_dots.children[i] != null) {
                carousel_dots.children[i].classList.add("carousel--dot-active");
            }
        }
    }
}

function setup_dots(carousel_dot, items_count) {
    if (items_count > 8) {return}
    for (let i = 0; i < items_count; i++) {
        const dot = document.createElement("DIV");
        carousel_dot.appendChild(dot);
        dot.addEventListener("click", dot_button);
    }
}

function dot_button() {
    const carousel_dots = this.parentElement;
    const carousel_items = carousel_dots.parentElement.querySelector(".carousel--items");
    let index = 0;
    for (let i = 0; i < carousel_dots.children.length; i++) {
        if (carousel_dots.children[i] == this){
            index = i;
            break;
        }
    }
    carousel_items.setAttribute("alt", index);
    update_items(carousel_items, carousel_dots);
}

function next() {
    const carousel_items = this.parentElement.querySelector(".carousel--items");
    const carousel_dots = this.parentElement.querySelector(".carousel--dots");
    let index = parseInt(carousel_items.getAttribute("alt"), 10);
    index = index + 1;
    if ((carousel_items.children.length) == index) {
        index = 0;
    }
    carousel_items.setAttribute("alt", index);
    update_items(carousel_items, carousel_dots);
}

function prev() {
    const carousel_items = this.parentElement.querySelector(".carousel--items");
    const carousel_dots = this.parentElement.querySelector(".carousel--dots");
    let index = parseInt(carousel_items.getAttribute("alt"), 10);
    index = index - 1;
    if (index < 0) {
        index = carousel_items.children.length -1;
    }
    carousel_items.setAttribute("alt", index);
    update_items(carousel_items, carousel_dots);
}
