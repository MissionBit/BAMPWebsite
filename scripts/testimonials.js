function cloneForMobile(elem) {
    const clone = elem.cloneNode(true)
    clone.classList.remove('u-onlyDesktop')
    clone.classList.remove('carousel-double')
    clone.classList.add('u-onlyMobile')
    elem.parentElement.appendChild(clone)
}

const carousel = document.querySelector('#testimonials .carousel')
cloneForMobile(carousel)
