let header = document.getElementById('head');

$(function(){ // функция из JQuery - сокращение формы ready
include("Rofl_scripts/parallax.js");
    $("#flipbook").turn({
        width: 700,
        height: 300,
    });
    $("#flipbook").turn("zoom", 1.5);

});


//include function
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
}
