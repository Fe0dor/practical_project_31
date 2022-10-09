let carouselItems = document.querySelectorAll('.carousel__item');
let itemInd = -1;

let slideInterval = setInterval(() => {
    itemInd += 1;
    if (itemInd >= carouselItems.length) {
        itemInd = 0;
    }
    console.log((itemInd - 1 < 0) ? carouselItems.length - 1 : itemInd - 1);
    carouselItems[itemInd].classList.add('carousel__item_active');
    carouselItems[itemInd].classList.add('carousel__item_start');
    carouselItems[(itemInd - 1 < 0) ? carouselItems.length - 1 : itemInd - 1].classList.add('carousel__item_start');
    setTimeout(() => {
        carouselItems[(itemInd - 1 < 0) ? carouselItems.length - 1 : itemInd - 1].classList.remove('carousel__item_active');
        carouselItems[itemInd].classList.remove('carousel__item_start');
        carouselItems[(itemInd - 1 < 0) ? carouselItems.length - 1 : itemInd - 1].classList.remove('carousel__item_start');
    }, 600);
}, 2000);