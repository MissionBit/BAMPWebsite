function cloneForMobile(elem, parent) {
    const clone = elem.cloneNode(true)
    clone.classList.remove('u-onlyDesktop')
    clone.classList.remove('carousel-double')
    clone.classList.add('u-onlyMobile')
    parent.appendChild(clone)
}

const testimonials = document.querySelector('#testimonials')
const carousel = testimonials.querySelector('.carousel')

cloneForMobile(carousel, testimonials)
