new Glide('.glide', {
    type: 'carousel',
    startArt: 0,
    perView: 3,
    gap: 30,
    breakpoints: {
        991: {
            perView: 2
        },
        768: {
            perView: 1,
            gap: 0
        }
    }
}).mount()