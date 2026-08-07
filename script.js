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
