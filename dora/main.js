document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("slider-wght").addEventListener("input", function () {

        let axisValue = "'wght' " +document.getElementById("slider-wght").value + ", 'wdth' " + document.getElementById("slider-wdth").value;

        document.getElementById("testarea").style.setProperty("animation","none","");
        document.getElementById("testarea").style.setProperty("font-variation-settings",axisValue,"");

        document.getElementById("value-wght").innerText = document.getElementById("slider-wght").value;

    });

    document.getElementById("slider-wdth").addEventListener("input", function () {

        let axisValue = "'wght' " +document.getElementById("slider-wght").value + ", 'wdth' " + document.getElementById("slider-wdth").value;

        document.getElementById("testarea").style.setProperty("animation","none","");
        document.getElementById("testarea").style.setProperty("font-variation-settings",axisValue,"");

        document.getElementById("value-wdth").innerText = document.getElementById("slider-wdth").value;

    });
    var button = document.getElementById('toggleButton');
    var headline = document.querySelector('.headline-text');
    var details = document.querySelector('details');


    var text = document.querySelectorAll('.text');

    button.addEventListener('click', function() {
        if (headline.style.animationPlayState === 'paused') {
            headline.style.animationPlayState = 'running';
            text.forEach(element => element.style.animationPlayState = 'running');
            button.innerText="Stop animation";
        } else {
            headline.style.animationPlayState = 'paused';
            details.style.animationPlayState = 'paused';
            text.forEach(element => element.style.animationPlayState = 'paused');

            button.innerText="Start animation";
        }
    });

});

