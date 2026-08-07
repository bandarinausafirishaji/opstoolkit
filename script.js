function calculateTEU(){

    let twenty = Number(document.getElementById("twenty").value);
    let forty = Number(document.getElementById("forty").value);

    let total = (twenty * 1) + (forty * 2);

    document.getElementById("teuResult").innerHTML =
    "Total TEU: " + total;

}



function calculateCBM(){

    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);

    let cbm = length * width * height;

    document.getElementById("cbmResult").innerHTML =
    "Total CBM: " + cbm.toFixed(2) + " m³";

}




function checkContainer(){

    let cbm = Number(document.getElementById("cargoCBM").value);

    let result;


    if(cbm <= 33){

        result = "Recommended: 20ft General Purpose Container";

    } 
    else if(cbm <= 67){

        result = "Recommended: 40ft General Purpose Container";

    } 
    else if(cbm <= 76){

        result = "Recommended: 40ft High Cube Container";

    } 
    else {

        result = "Cargo volume exceeds standard container capacity.";

    }


    document.getElementById("containerResult").innerHTML = result;

}





function kgToTon(){

    let value = Number(document.getElementById("unitValue").value);

    let result = value / 1000;


    document.getElementById("unitResult").innerHTML =
    value + " KG = " + result.toFixed(3) + " Ton";

}





function tonToKg(){

    let value = Number(document.getElementById("unitValue").value);

    let result = value * 1000;


    document.getElementById("unitResult").innerHTML =
    value + " Ton = " + result + " KG";

}





function meterToCm(){

    let value = Number(document.getElementById("unitValue").value);

    let result = value * 100;


    document.getElementById("unitResult").innerHTML =
    value + " Meter = " + result + " CM";

}





function cmToMeter(){

    let value = Number(document.getElementById("unitValue").value);

    let result = value / 100;


    document.getElementById("unitResult").innerHTML =
    value + " CM = " + result.toFixed(2) + " Meter";

}
