new Swiper(".swiper-container", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1.25,
    slidesPerView: 'auto',
    allowTouchMove: false,
    breakpoints: { 320: { enabled: true, }, 768: { enabled: false, } }
  
});

const logos = document.querySelector('.section-brands__list');
const btnMore = document.querySelector('.section-brands__change');

btnMore.addEventListener('click', function () {
    logos.classList.toggle("visible")
    if (logos.classList.contains("visible")) {
        btnMore.textContent = 'Скрыть';
        btnMore.classList.add("button-open")
        logos.style.height = "auto";
}
    if (!logos.classList.contains("visible")) {
        btnMore.textContent = 'Показать все';
        btnMore.classList.remove("button-open")
        logos.style.height = "176px";
}
});


