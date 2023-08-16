
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clr-btn").addEventListener("click", function() { document.getElementById("clr").classList.toggle("animate");

                                                                             document.getElementById("def").classList.toggle("animate");

                                                                             document.getElementById("clr-btn").classList.toggle("animate");
                                                                             document.getElementById("head").classList.toggle("animate");
                                                                             document.getElementById("body").classList.toggle("bg-anim");
                                                                            });

});