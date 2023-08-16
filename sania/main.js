document.addEventListener('DOMContentLoaded', function() {
    var heading = document.getElementById('heading');
    var text = document.getElementById('text');
    var currentWeight = 1;

    var sliderContainer = document.createElement('div');
    sliderContainer.style.position = 'fixed';
    sliderContainer.style.bottom = '0';
    sliderContainer.style.left = '0';
    sliderContainer.style.width = '100%';
    sliderContainer.style.height = '30px';
    sliderContainer.style.backgroundColor = 'white';

    var slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '1';
    slider.max = '1500';
    slider.value = currentWeight;
    slider.style.width = '100%';
    slider.style.height = '30px';

    sliderContainer.appendChild(slider);
    document.body.appendChild(sliderContainer);

    slider.addEventListener('input', function(event) {
        var weight = event.target.value;
        heading.style.setProperty("font-variation-settings", "'wght'"+weight,"") ;
        text.style.setProperty("font-variation-settings", "'wght'"+weight,"");
    });
});