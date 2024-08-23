$(document).ready(function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
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