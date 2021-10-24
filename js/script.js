let slideIndex = 1
showSlides(slideIndex)  // TODO: есть идеи, почему так делать нельзя?

function showSlides(n) {
    let slides = document.getElementsByClassName('photo')

    // TODO: такое форматирование - очень плохой тон
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let slide of slides) {slide.style.display = "none"}

    slides[slideIndex - 1].style.display = "block"
}

//-----------------------------------------------------------//

// TODO: в идеале этот код должен быть изолирован
// еще этот код можно улучшить, если присваивать вместо стиля конкретный класс-модификатор
// попробуй это реализовать;
const slides = document.getElementsByClassName('photo');
const length = slides.length;
let currentIndex = 0;
slides[0].style.display = "block";

function showSlideByIndex(increment = true) {
    slides[currentIndex].style.display = "none";

    if(increment) {
        currentIndex = (currentIndex + 1) % length;
    } else {
        currentIndex = currentIndex === 0 ? length - 1 : (currentIndex - 1) % length;
    }

    slides[currentIndex].style.display = "block";
}

nextSlide = () => showSlideByIndex();
previousSlide = () => showSlideByIndex(false);
