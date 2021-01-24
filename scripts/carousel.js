function setUpCarousel(root) {
    const siema = new SiemaWithDots({
        selector: root.querySelector('.carousel--items'),
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        onInit: function() {
            this.addDots()
            this.updateDots()
        },
        onChange: function() {
            this.updateDots()
        },
    })

    const prevBtn = root.querySelector('.carousel--prev')
    if (prevBtn) {
        prevBtn.addEventListener('click', () => siema.prev())
    }

    const nextBtn = root.querySelector('.carousel--next')
    if (nextBtn) {
        nextBtn.addEventListener('click', () => siema.next())
    }
}

const carousels = document.querySelectorAll('.carousel')

for (const c of carousels) {
    setUpCarousel(c)
}
