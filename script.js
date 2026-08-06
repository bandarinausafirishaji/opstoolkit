alert("OpsToolkit JS imefanya kazi");
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
