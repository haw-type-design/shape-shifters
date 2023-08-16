$(document).ready(function() {

    // Randomly position the cards within the viewport
    $('.flip-card').each(function() {
        var $card = $(this);
        var cardWidth = $card.outerWidth();
        var cardHeight = $card.outerHeight();
        var viewportWidth = $('.viewport').width();
        var viewportHeight = $('.viewport').height();
        var maxLeft = viewportWidth - cardWidth/2;
        var maxTop = viewportHeight - cardHeight/2;

        var randomLeft = Math.floor(Math.random() * (maxLeft+1));
        var randomTop = Math.floor(Math.random() * (maxTop+1));

        $card.css({
            left: randomLeft + 'px',
            top: randomTop + 'px',
            zIndex: Math.floor(Math.random() *16)
        });
    });


    // Make the cards draggable
    $('.flip-card').draggable({
        stack: '.flip-card',
        start: function(event, ui) {
            // Bring the current card to the front
            $(this).css('z-index', getHighestZIndex() + 1);
        }
    });

    // Function to get the highest z-index value among the cards
    function getHighestZIndex() {
        var highestZIndex = 0;
        $('.flip-card').each(function() {
            var zIndex = parseInt($(this).css('z-index'));
            if (zIndex > highestZIndex) {
                highestZIndex = zIndex;
            }
        });
        return highestZIndex;
    }

    // Function to flip the card back to the front side
    function flipCardBack($card) {
        var $cardFront = $card.find('.card-front');
        var $cardBack = $card.find('.card-back');

        $cardFront.removeClass('flipped');
        $cardBack.removeClass('flipped');
    }

    // Toggle the card flip classes on click
    $('.flip-card').click(function() {
        var $cardFront = $(this).find('.card-front');
        var $cardBack = $(this).find('.card-back');

        $cardFront.toggleClass('flipped');
        $cardBack.toggleClass('flipped');

        // Reset the flip back timeout
        clearTimeout($(this).data('flipTimeout'));

        // Set a new flip back timeout for 10 seconds
        var flipTimeout = setTimeout(function() {
            flipCardBack($cardFront.closest('.flip-card'));
        }, 7500);

        // Store the timeout reference for later use
        $(this).data('flipTimeout', flipTimeout);
    });

    // Bring the card to the foreground on hover and keep it there
    $('.flip-card').on('mouseenter', function() {
        var $card = $(this);
        var currentZIndex = parseInt($card.css('z-index'));
        var highestZIndex = getHighestZIndex();

        if (currentZIndex !== highestZIndex) {
            $card.css('z-index', highestZIndex + 1);
        }
    });

});