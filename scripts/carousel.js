function unhideItems(root) {
    const items = root.querySelectorAll('.carousel--item-is-hidden')
    for (const item of items) {
        item.classList.remove('carousel--item-is-hidden')
    }
}

function setUpCarousel(root, perPage = 1) {
    const siema = new SiemaWithDots({
        perPage,
        selector: root.querySelector('.carousel--items'),
        duration: 300,
        easing: 'ease-out',
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        onInit: function() {
            this.addDots()
            this.updateDots()
            unhideItems(root)
        },
        onChange: function() {
            this.updateDots()
        },
        autoplay: root.classList.contains('carousel-autoplay'),
        autoplayDuration: 8000,
    })

    const prevBtn = root.querySelector('.carousel--arrow-prev')
    if (prevBtn) {
        prevBtn.addEventListener('click', () => siema.prev())
    }

    const nextBtn = root.querySelector('.carousel--arrow-next')
    if (nextBtn) {
        nextBtn.addEventListener('click', () => siema.next())
    }
}

const singleCarousels = document.querySelectorAll('.carousel:not(.carousel-double)')
for (const c of singleCarousels) {
    setUpCarousel(c)
}

const doubleCarousels = document.querySelectorAll('.carousel-double')
for (const c of doubleCarousels) {
    setUpCarousel(c, 2)
}
