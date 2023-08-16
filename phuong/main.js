document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("DOMContentLoaded", function() {
        var axis1Slider = document.getElementById("axis1");
        var axis1Value = document.getElementById("axis1-value");
        var axis2Slider = document.getElementById("axis2");
        var axis2Value = document.getElementById("axis2-value");
        var axis3Slider = document.getElementById("axis3");
        var axis3Value = document.getElementById("axis3-value");
        var axis4Slider = document.getElementById("axis4");
        var axis4Value = document.getElementById("axis4-value");
        var textElement = document.getElementById("text");

        axis1Slider.addEventListener("input", function() {
            axis1Value.textContent = axis1Slider.value;
            updateFontVariationSettings();
        });

        axis2Slider.addEventListener("input", function() {
            axis2Value.textContent = axis2Slider.value;
            updateFontVariationSettings();
        });

        axis3Slider.addEventListener("input", function() {
            axis3Value.textContent = axis3Slider.value;
            updateFontVariationSettings();
        });

        axis4Slider.addEventListener("input", function() {
            axis4Value.textContent = axis4Slider.value;
            updateFontVariationSettings();
        });

        function updateFontVariationSettings() {
            var wghtValue = axis1Slider.value;
            var wdthValue = axis2Slider.value;
            var italValue = axis3Slider.value;
            var slntValue = axis4Slider.value;

            var fontVariationSettings = `'wght' ${wghtValue}, 'wdth' ${wdthValue}, 'ital' ${italValue}, 'slnt' ${slntValue}`;
            textElement.style.fontVariationSettings = fontVariationSettings;
        }
    });


    var showButton = document.getElementById("showButton");
    var hiddenText = document.getElementById("hiddenText");

    showButton.addEventListener("click", function() {
        if (hiddenText.style.display === "none") {
            hiddenText.style.display = "block";
            showButton.textContent = "Show less";
        } else {
            hiddenText.style.display = "none";
            showButton.textContent = "Read more";
        }
    });



    window.addEventListener("DOMContentLoaded", function() {
        var axis11Slider = document.getElementById("axis11");
        var axis11Value = document.getElementById("axis11-value");
        var axis21Slider = document.getElementById("axis21");
        var axis21Value = document.getElementById("axis21-value");
        var axis31Slider = document.getElementById("axis31");
        var axis31Value = document.getElementById("axis31-value");
        var axis41Slider = document.getElementById("axis41");
        var axis41Value = document.getElementById("axis41-value");
        var textElement = document.getElementById("text1");

        axis11Slider.addEventListener("input", function() {
            axis11Value.textContent = axis11Slider.value;
            updateFontVariationSettings();
        });

        axis21Slider.addEventListener("input", function() {
            axis21Value.textContent = axis21Slider.value;
            updateFontVariationSettings();
        });

        axis31Slider.addEventListener("input", function() {
            axis31Value.textContent = axis31Slider.value;
            updateFontVariationSettings();
        });

        axis41Slider.addEventListener("input", function() {
            axis41Value.textContent = axis41Slider.value;
            updateFontVariationSettings();
        });

        function updateFontVariationSettings() {
            var wghtValue = axis11Slider.value;
            var wdthValue = axis21Slider.value;
            var italValue = axis31Slider.value;
            var slntValue = axis41Slider.value;

            var fontVariationSettings = `'wght' ${wghtValue}, 'wdth' ${wdthValue}, 'ital' ${italValue}, 'slnt' ${slntValue}`;
            textElement.style.fontVariationSettings = fontVariationSettings;
        }
    });


    window.addEventListener("DOMContentLoaded", function() {
        var axis12Slider = document.getElementById("axis12");
        var axis12Value = document.getElementById("axis12-value");
        var axis22Slider = document.getElementById("axis22");
        var axis22Value = document.getElementById("axis22-value");
        var axis32Slider = document.getElementById("axis32");
        var axis32Value = document.getElementById("axis32-value");
        var axis42Slider = document.getElementById("axis42");
        var axis42Value = document.getElementById("axis42-value");
        var textElement = document.getElementById("text2");

        axis12Slider.addEventListener("input", function() {
            axis12Value.textContent = axis12Slider.value;
            updateFontVariationSettings();
        });

        axis22Slider.addEventListener("input", function() {
            axis22Value.textContent = axis22Slider.value;
            updateFontVariationSettings();
        });

        axis32Slider.addEventListener("input", function() {
            axis32Value.textContent = axis32Slider.value;
            updateFontVariationSettings();
        });

        axis42Slider.addEventListener("input", function() {
            axis42Value.textContent = axis42Slider.value;
            updateFontVariationSettings();
        });

        function updateFontVariationSettings() {
            var wghtValue = axis12Slider.value;
            var wdthValue = axis22Slider.value;
            var italValue = axis32Slider.value;
            var slntValue = axis42Slider.value;

            var fontVariationSettings = `'wght' ${wghtValue}, 'wdth' ${wdthValue}, 'ital' ${italValue}, 'slnt' ${slntValue}`;
            textElement.style.fontVariationSettings = fontVariationSettings;
        }
    });

});