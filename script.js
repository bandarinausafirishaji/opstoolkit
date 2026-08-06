console.log("OpsToolkit JavaScript loaded");


function calculateTEU() {

    let twenty = document.getElementById("twenty").value;
    let forty = document.getElementById("forty").value;


    twenty = Number(twenty);
    forty = Number(forty);


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
