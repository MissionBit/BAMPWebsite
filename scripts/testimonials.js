function cloneCarousel(el) {
    const clone = $(el).clone()
        .removeClass('u-onlyDesktop')
        .removeClass('carousel-double')
        .addClass('u-onlyMobile')
    $(el).after(clone)
}

$('#testimonials .carousel').each((idx, el) => cloneCarousel(el))
