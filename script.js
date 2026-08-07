// TEU Calculator

function calculateTEU() {

let twenty = Number(document.getElementById("twenty").value) || 0;
let forty = Number(document.getElementById("forty").value) || 0;

let teu = (twenty * 1) + (forty * 2);

document.getElementById("teuResult").innerHTML =
"Total TEU: " + teu;

}





// CBM Calculator

function calculateCBM() {

let length = Number(document.getElementById("length").value) || 0;
let width = Number(document.getElementById("width").value) || 0;
let height = Number(document.getElementById("height").value) || 0;


let cbm = length * width * height;


document.getElementById("cbmResult").innerHTML =
"Total CBM: " + cbm.toFixed(2) + " m³";

}





// Container Recommendation

function checkContainer() {

let cbm = Number(document.getElementById("cargoCBM").value) || 0;

let result;


if (cbm <= 33) {

result = "Recommended: 20ft Container";

}

else if (cbm <= 67) {

result = "Recommended: 40ft Container";

}

else {

result = "Consider multiple containers";

}


document.getElementById("containerResult").innerHTML = result;

}





// Logistics Unit Converter

function kgToTon() {

let kg = Number(document.getElementById("unitValue").value) || 0;

let ton = kg / 1000;


document.getElementById("unitResult").innerHTML =
kg + " KG = " + ton.toFixed(3) + " Tons";

}





function tonToKg() {

let ton = Number(document.getElementById("unitValue").value) || 0;

let kg = ton * 1000;


document.getElementById("unitResult").innerHTML =
ton + " Tons = " + kg.toFixed(2) + " KG";

}





function kgToLb() {

let kg = Number(document.getElementById("unitValue").value) || 0;

let lb = kg * 2.20462;


document.getElementById("unitResult").innerHTML =
kg + " KG = " + lb.toFixed(2) + " LB";

}





function lbToKg() {

let lb = Number(document.getElementById("unitValue").value) || 0;

let kg = lb / 2.20462;


document.getElementById("unitResult").innerHTML =
lb + " LB = " + kg.toFixed(2) + " KG";

}





function meterToCm() {

let meter = Number(document.getElementById("unitValue").value) || 0;

let cm = meter * 100;


document.getElementById("unitResult").innerHTML =
meter + " Meter = " + cm.toFixed(2) + " CM";

}





function cmToMeter() {

let cm = Number(document.getElementById("unitValue").value) || 0;

let meter = cm / 100;


document.getElementById("unitResult").innerHTML =
cm + " CM = " + meter.toFixed(2) + " Meter";

}





function meterToFeet() {

let meter = Number(document.getElementById("unitValue").value) || 0;

let feet = meter * 3.28084;


document.getElementById("unitResult").innerHTML =
meter + " Meter = " + feet.toFixed(2) + " Feet";

}





function feetToMeter() {

let feet = Number(document.getElementById("unitValue").value) || 0;

let meter = feet / 3.28084;


document.getElementById("unitResult").innerHTML =
feet + " Feet = " + meter.toFixed(2) + " Meter";

}
