$(document).ready(function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentSlide = 0;

    function moveToSlide(track, currentSlide, targetSlide) {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide = targetSlide;
    }

    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    function nextSlide() {
        const currentSlideIndex = (currentSlide + 1) % ((slides.length)-2);
        moveToSlide(track, currentSlide, slides[currentSlideIndex]);
        currentSlide = currentSlideIndex;
    }

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

    // Hero Section Full Height
    $(function () {
        var windowH = $(window).height();
        var wrapperH = $('.hero').height();
        if (windowH > wrapperH) {
            $('.hero').css({ 'height': ($(window).height()) + 'px' });
        }
        $(window).resize(function () {
            var windowH = $(window).height();
            var wrapperH = $('.hero').height();
            var differenceH = windowH - wrapperH;
            var newH = wrapperH + differenceH;
            var truecontentH = $('#truecontent').height();
            if (windowH > truecontentH) {
                $('.hero').css('height', (newH) + 'px');
            }
        });
    });
});