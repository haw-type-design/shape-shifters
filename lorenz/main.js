

function updateText(e) {
    multiplierWidth = e.offsetX / window.innerWidth;
    multiplierHeight = e.offsetY / window.innerHeight;
    console.log(multiplierWidth);
    randomWeight =  multiplierWidth * 800 + 100;
    randomWidth =  multiplierHeight * 800 + 100;
    headline.style.fontVariationSettings = "\"UPSL\" " + randomWeight + ", \"LWSL\" " + randomWidth;
}
document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("mousemove", updateText)


    const headline =  document.getElementById("headline");

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click(); 





    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;


    var sticky = navbar.offsetTop;



    var btn = document.getElementById("rnd-btn");
    var out = document.getElementById("output");


    btn.addEventListener("click", getWord);




    slider_width.addEventListener("input", function () {
        var axisValue2 = "'wdth'" + slider_width.value+ ", 'UPSL'" +slider_UPSL.value + ", 'LWSL'" +slider_LWSL.value;
        text.style.setProperty("font-variation-settings", axisValue2, "");
        value_width.innerText = slider_width.value;
    });


    slider_UPSL.addEventListener("input", function () {
        var axisValue2 = "'wdth'" + slider_width.value+ ", 'UPSL'" +slider_UPSL.value + ", 'LWSL'" +slider_LWSL.value;
        text.style.setProperty("font-variation-settings", axisValue2, "");
        value_UPSL.innerText = slider_UPSL.value;
    });

    slider_LWSL.addEventListener("input", function () {
        var axisValue2 = "'wdth'" + slider_width.value+ ", 'UPSL'" +slider_UPSL.value + ", 'LWSL'" +slider_LWSL.value;
        text.style.setProperty("font-variation-settings", axisValue2, "");
        value_LWSL.innerText = slider_LWSL.value;
    });


    // Make the DIV element draggable:
    dragElement(document.getElementById("mydiv"));



    // Make the DIV element draggable:
    dragElement(document.getElementById("mydiv"));

    imageCaller();

});

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;

    slider_size.oninput = changeFontSize;
}




function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
} 



function getWord(){


    var theWord= [
        'Split-Flap Display',
        'Fluttering Code',
        'Shannon Mattern',
        'Shape Shifters',
        'HAW DMI',
        'Solari',
        'Cinematic',
        'Air Travel',
        'Railway Station',
        'Plato Clock',
        'Pesariis, Italy (1725)',
        'Cifra',
        'Emera',
        'Dator',
        'Conrac',
        'Omega',
        'Bodet',
        'Pragotron',
        'Amtrak',
        'Cold War Context',
        'Clickety-Clack',
        'Penn Station',
        'Jamaica Station',
        'Atlantic Terminal',
        'Amelio Candussio',
        'JFK Airport, New York',
        'LAb(au): Signal to Noise (2010)',
        '24:00:01 (2010-12)',
    ];

    var wordNum = Math.floor(Math.random() * theWord.length);
    output.textContent = theWord[wordNum];
}






function changeFontSize() {
    text.style.fontSize = this.value + "px";
}




function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}



function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}






function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}




async function imageCaller() {
    var imgArray=[];
    $(".crypt-img").each(function() {
        imgArray.push($( this ));
    });

    console.log(imgArray);

    for(img of imgArray){
        console.log(img);
        var a = await ImageEncryt(img.attr('src'), '55555555', 1, 0);
        console.log(a);
        img.attr('src',  a);
        console.log(img);
    }
}






function Addimage(img_link) {
    return new Promise((resolve, reject) => {
        (async () => {
            const newimg = await fetch(img_link)
            resolve(URL.createObjectURL(await newimg.blob()))
        })()
    })
}

function ColorChannelGroupToPixel(array_original) {
    var pixelarray = [];
    var i = 0, data_length = array_original.data.length;
    for (let i = 0; i < data_length; i = i + 4) {
        pixelarray.push([
            array_original.data[i],
            array_original.data[i + 1],
            array_original.data[i + 2],
            array_original.data[i + 3]
        ])
    }
    return pixelarray;
}

function PixelGroupTo2DArray(Array_1d, x_size, y_size) {
    var Array2D = [];
    for (let x = 0; x < x_size; x++) {
        var Array2D_singleline = [];
        for (let y = 0; y < y_size; y = y + 1) {
            Array2D_singleline.push(Array_1d[(y_size * x) + y]);
        }
        Array2D.push(Array2D_singleline)
    }
    return Array2D;
}

function PixelShift(array_orginal, offset_start, offset_per_step, pos_or_nega = 0) {
    var difficulty = 1;
    var array_processed = []

    for (let x = 0; x < array_orginal.length; x = x + difficulty) {

        offset_start = offset_start + offset_per_step;

        if (offset_start > array_orginal[0].length) {
            offset_start = offset_start - array_orginal[0].length;
        }

        for (let dif = 0; dif < difficulty; dif++) {
            if (pos_or_nega == 0) {
                array_processed.push(offset(array_orginal[x + dif], offset_start));
            } else {
                array_processed.push(offset(array_orginal[x + dif], -offset_start));
            }

        }

    }

    return array_processed;
}

function Reverse2DArray(array2D_input) {
    var array2D_reversed = [];
    for (let x = 0; x < array2D_input[0].length; x++) {
        var array2D_reversed_width = [];
        for (let y = 0; y < array2D_input.length; y++) {
            array2D_reversed_width.push(array2D_input[y][x])
        }
        array2D_reversed.push(array2D_reversed_width);
    }

    return array2D_reversed;
}

function Flat2DArrayDeepCopy(array_2d_original, array_foroverwrite) {
    var array_1d = [];
    for (let i = 0; i < array_2d_original.length; i++) {
        var array_pixel = [];
        for (let ii = 0; ii < array_2d_original[i].length; ii++) {
            for (let iii = 0; iii < array_2d_original[i][ii].length; iii++) {
                array_1d.push(array_2d_original[i][ii][iii]);
            }
        }
    }
    for (let x = 0; x < array_1d.length; x++) {
        array_foroverwrite[x] = array_1d[x];
    }
    return array_1d;
}

const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];

async function ImageEncryt_inner(
Img_original_url,
 x_offset_start, x_offset_per_step, y_offset_start, y_offset_per_step,
 Encrypt_or_Decryt, Fast_mode = 0) {
    return new Promise((resolve, reject) => {
        (async () => {
            const xx = new Image();
            xx.src = await Addimage(Img_original_url);

            const canv = document.createElement('canvas');
            canv.style.display = 'none';
            const canvContext = canv.getContext('2d');

            xx.onload = function () {
                //console.log('xx.height,xx.width', xx.height, xx.width)

                canv.height = xx.height;
                canv.width = xx.width;
                canvContext.drawImage(xx, 0, 0, xx.width, xx.height);
                var id = canvContext.getImageData(0, 0, xx.width, xx.height);

                //Create new Canvas
                const canv2 = document.createElement('canvas');
                const canvContext2 = canv2.getContext('2d');
                canv2.style.display = 'none'
                canv2.height = xx.height;
                canv2.width = xx.width;
                //document.body.appendChild(canv2);

                //#region Turn Color Channel Array To Pixel 2D array
                var id2 = canvContext2.createImageData(xx.width, xx.height);

                var color_array = ColorChannelGroupToPixel(id);

                var color_array_height = PixelGroupTo2DArray(color_array, xx.height, xx.width);
                //#endregion

                //#region Encrypt process
                if (Encrypt_or_Decryt == 0) {
                    //Horizontial Shift
                    var p_layer1 = PixelShift(color_array_height, x_offset_start, x_offset_per_step);

                    if (Fast_mode == 0) {
                        //Vertical  Shift
                        var p_layer2 = Reverse2DArray(p_layer1);
                        var p_layer3 = PixelShift(p_layer2, y_offset_start, y_offset_per_step);
                        var p_layer4 = Reverse2DArray(p_layer3);
                    } else {
                        var p_layer4 = p_layer1;
                    }

                } else {
                    if (Fast_mode == 0) {
                        //Vertical  Shift
                        var p_layer1 = Reverse2DArray(color_array_height);
                        var p_layer2 = PixelShift(p_layer1, y_offset_start, y_offset_per_step, 1);
                        var p_layer3 = Reverse2DArray(p_layer2);
                    } else {
                        var p_layer3 = color_array_height;
                    }

                    //Horizontial Shift
                    var p_layer4 = PixelShift(p_layer3, x_offset_start, x_offset_per_step, 1);
                }
                //#endregion

                id2.data = Flat2DArrayDeepCopy(p_layer4, id2.data);

                canvContext2.putImageData(id2, 0, 0);
                const Encryted_img = canv2.toDataURL();

                resolve(Encryted_img);
            }

        })()

    })

}

async function ImageEncryt(url, password, method, Fast_mode) {
    //password
    var pw_array = password.match(/.{1,2}/g);

    return await ImageEncryt_inner(url, parseInt(pw_array[0]), parseInt(pw_array[1]), parseInt(pw_array[2]), parseInt(pw_array[3]), method, Fast_mode);
}