const merge = (l, r) => Object.assign({}, l, r)

const slickDefaults = {
    dots: true,
    dotsClass: 'carousel--dots',
    prevArrow: '<button type="button" class="carousel--arrow carousel--arrow-prev">&#10094;</button>',
    nextArrow: '<button type="button" class="carousel--arrow carousel--arrow-next">&#10095;</button>'
}

$(document).ready(() => {
    $('.js-carousel-standard').slick(slickDefaults)

    $('.js-carousel-homepage').slick(merge(slickDefaults, {
        responsive: [
            {
                breakpoint: 600,
                settings: {fade: false}
            }
        ],
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true
    }))

    $('.js-carousel-testimonials').slick(merge(slickDefaults, {
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1000,
                settings: {slidesToShow: 1, slidesToScroll: 1}
            }
        ]
    }))
})
