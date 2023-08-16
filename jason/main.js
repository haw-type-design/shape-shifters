$(document).ready(function() {

    window.addEventListener('scroll', function() {
        var element = document.getElementById('SCHIEBER');
        var position = element.getBoundingClientRect().top;

        var windowHeight = window.innerHeight;

        if (position - windowHeight <= 0) {
            element.classList.add('schieber-animate');
        } else {
            element.classList.remove('schieber-animate');
        }
    });



});