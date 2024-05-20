new Swiper(".swiper-container", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1.25,
  
});

var logos = document.querySelector('.section-brands__list');
var openMore = document.querySelector('.section-brands__change-button');

openMore.addEventListener('click', function () {
    logos.classList.toggle("visible")

});

function reverse() {
    var e = document.getElementById("text");
    var txt = e.textContent || e.innerText;
    var txt2 = 'Скрыть';
      if(txt != txt2){var newtxt = 'Скрыть';
      text.classList.add("button-open")
      
      }
      else{var newtxt = 'Показать все';
      text.classList.remove("button-open")
      }
    document.getElementById('text').innerHTML = newtxt;
    }