document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("button2").addEventListener("click", function () {
        document.getElementById("popup").style.setProperty("display","none","");
    });


    document.body.addEventListener("Auseinandersetzung", function() { document.getElementById("text4").style.color = "#52FF00";
                                                                    });

    document.body.addEventListener("Auseinandersetzung", function() { document.getElementById("text5").style.color = "#52FF00";
                                                                    });

    document.body.addEventListener("Auseinandersetzung", function() { document.getElementById("text6").style.color = "#52FF00";
                                                                    });

    document.body.addEventListener("Auseinandersetzung", function() { document.getElementById("text7").style.color = "#52FF00";
                                                                    });





    document.getElementById("wordButton").addEventListener("click", function() {
        var sentence = document.getElementById("sentence");
        sentence.textContent = "Does a font have to be readable?";
    });

    document.getElementById("wordButton").addEventListener("click", function() {
        var sentence = document.getElementById("sentence");
        sentence.textContent = "Does a font have to be readable?";
    });

    document.getElementById("phraseButton").addEventListener("click", function() {
        var sentence = document.getElementById("sentence");
        sentence.textContent = "The typeface is an initial impulse of every medium; it decisively shapes the very first concept that viewers form of a design - and thus potentially of the value of the appearance as a whole. How important this initial impulse is for reading success and reader loyalty is certainly difficult to assess and at least as difficult to grasp empirically - and therefore its relevance can hardly be classified.";
    });

    document.getElementById("paragraphButton").addEventListener("click", function() {
        var sentence = document.getElementById("sentence");
        sentence.textContent = "Formal criteria (stylistic \nfeatures and issues of legibility) are indeed essential for the appearance of the typeface. The object itself is more complex. In the background are technical questions. In what process is a typeface available? Are the types identical in hand, machine and phototypesetting? To the well-founded nuances of the different grades (the proportionally different widths) are added well-founded ones (such as the deviations in the form as here with the g). Without recognizable reason are craft irregularities like the different cone stand.From top to bottom, four different degrees with the same cone thickness; from left to right, the same degrees with the same letter height: Other criteria for evaluation: how developed is a typeface? How many sets and to what extent are these sets coordinated? These questions are essential for the designer. Today more than ever (and tomorrow more than ever). The development of grotesque cuts unmistakably shows the trend toward broader expansion. What about commercial printing? It is cut in sixteen trimmings. Some of them (the semi-fat one) have become world-famous, others are justly, still others (the lean one, the narrow-lean one) have unjustly fallen almost into oblivion.";
    });

    document.getElementById("fontSizeSlider").addEventListener("input", function() {
        var sentence = document.getElementById("sentence");
        var fontSize = this.value + "px";
        sentence.style.fontSize = fontSize;
    });

    document.getElementById("FineSlider").addEventListener("input", function() {
        document.getElementById("sentence");
        var axisValue = "'FINE'"+document.getElementById("FineSlider").value +", 'BOLD'" +document.getElementById("BoldSlider").value;
        sentence.style.setProperty('font-variation-settings', axisValue,"");
    });


    document.getElementById("BoldSlider").addEventListener("input", function() {
        document.getElementById("sentence");
        var axisValue = "'FINE'"+document.getElementById("FineSlider").value +", 'BOLD'" +document.getElementById("BoldSlider").value;
        sentence.style.setProperty('font-variation-settings', axisValue,"");
    });

});
