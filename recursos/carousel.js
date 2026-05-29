document.querySelectorAll('.carousel').forEach(function(carousel) {
    var track = carousel.querySelector('.carousel-track');
    var prev = carousel.querySelector('.prev');
    var next = carousel.querySelector('.next');

    if (!track || !prev || !next) {
        return;
    }

    function moveCarousel(direction) {
        var card = track.querySelector('.card');
        var gap = 20;
        var distance = card ? card.offsetWidth + gap : 260;
        track.scrollBy({ left: direction * distance, behavior: 'smooth' });
    }

    prev.addEventListener('click', function() {
        moveCarousel(-1);
    });

    next.addEventListener('click', function() {
        moveCarousel(1);
    });
});
