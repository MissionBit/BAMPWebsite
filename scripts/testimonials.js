function cloneForMobile(elem) {
    const clone = elem.cloneNode(true)
    clone.classList.remove('u-onlyDesktop')
    clone.classList.remove('carousel-double')
    clone.classList.add('u-onlyMobile')
    elem.parentElement.appendChild(clone)
}

const tcs = document.querySelectorAll('#testimonials .carousel')

for (const tc of tcs) {
    cloneForMobile(tc)
}
