console.log("OpsToolkit is running successfully");


function calculateTEU(){

let twenty = Number(document.getElementById("twenty").value);

let forty = Number(document.getElementById("forty").value);


let totalTEU = (twenty * 1) + (forty * 2);


document.getElementById("teuResult").innerHTML =
"Total TEU: " + totalTEU;

}
