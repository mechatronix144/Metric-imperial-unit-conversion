const inputEl = document.getElementById("number")
const button = document.getElementById("btn")
let lengthValue = document.getElementById("paragraph1")
let volumeValue = document.getElementById("paragraph2")
let massValue = document.getElementById("paragraph3")






btn.addEventListener("click",function(){
document.getElementById("btn")


let inputFeildValue = inputEl.value;
let numberConversion = Number(inputEl.value);

convertLength(numberConversion);
convertVolume(numberConversion);
convertMass(numberConversion);
})


function convertLength(numberConversion){
        let metreToFeet = numberConversion * 0.05;
        let feetToMetre = numberConversion * 0.0002;
        let lengthResult = "";
         lengthResult += `${numberConversion} meters = ${metreToFeet.toFixed(3)} Feets | ${numberConversion} feets = ${feetToMetre.toFixed(3)} Metre`;
        lengthValue.textContent = lengthResult;
}

function convertVolume(numberConversion){
        let litresToGallons = numberConversion * 500;
        let GallonsToLitres = numberConversion * 0.05;
        let volumeResult = "";
        volumeResult += `${numberConversion} litres = ${litresToGallons.toFixed(3)} gallons | ${numberConversion} gallons = ${GallonsToLitres.toFixed(3)} litres`;
        volumeValue.textContent = volumeResult;
}

function convertMass(numberConversion){
        let kilosToPounds = numberConversion * 0.5;
        let poundsTOKilos = numberConversion * 100;
        let massResult = "";
        massResult += `${numberConversion} kilos = ${kilosToPounds.toFixed(3)} pounds | ${numberConversion} pounds = ${poundsTOKilos.toFixed(3)} kilos`
        massValue.textContent = massResult;
}