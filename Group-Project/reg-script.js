function initMap(){
    var location = {lat:3.2459703641133677 , lng:101.73964549095199};
    var map = new google.maps.Map(document.querySelector(".map"), {
        zoom: 18.5,
        center: location
    });
}

function showBlock(){
    var block = document.getElementById("block").value;
    console.log(block);

    var location;
    var bA = {lat:3.2460852080118046 , lng:101.74003117455396};
    var bB = {lat:3.245740676277349 , lng:101.7398281831845};
    var bC = {lat:3.2454524404840583, lng:101.73938385761546};
    var bD = {lat:3.245407403631964,  lng:101.73897110847328};
    var bE = {lat:3.2457249133785786,  lng:101.73864181136283};
    var bF = {lat:3.2460626895952096,  lng:101.73890570014312};
    var bG = {lat:3.245938838328894,  lng:101.73939739034914};
    var bPG = {lat:3.2463284068062745,  lng:101.73974247567725};

    switch(block){
        case "" :  initMap(); return 0;
        case "a":  location = bA; break;
        case "b":  location = bB; break;
        case "c":  location = bC; break;
        case "d":  location = bD; break;
        case "e":  location = bE; break;
        case "f":  location = bF; break;
        case "g":  location = bG; break;
        case "pg":  location = bPG; break;
        default: break;
    }
    var map = new google.maps.Map(document.querySelector(".map"), {
        zoom: 20,
        center: location
    });
}