let header = document.getElementById('head');

$(function(){ // функция из JQuery - сокращение формы ready
include("Rofl_scripts/parallax.js");
    $("#flipbook").turn({
        width: 700,
        height: 300,
    });
    $("#flipbook").turn("zoom", 1.5);
    sceneSnowMountain();
    events();
});
function events(){
    $("#flipbook").bind("turned", function(event, page, view) {
        if(page==1){
            sceneForest();
            sceneSnowMountain();
        }
        if(page==2){
            sceneSnowMountain();
            sceneForest();
        }

    });
}

function sceneSnowMountain(){
$("#IDbg").toggleClass("layer_SnowMountain");
    $("#IDl1").toggleClass("layer_blueSky");
    $("#IDl2").toggleClass("layer_clouds");
}

function sceneForest(){
    $("#IDbg").toggleClass("layer_forest");
    $("#IDl1").toggleClass("layer_ravens");
    $("#IDl2").toggleClass("layer_SpiritForest");
}

//include function
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
}
