const btnNavProfile = document.querySelector(".btnNavProfile");
const glassBack = document.querySelector(".glassBack");
const navFloatingProfile = document.querySelector(".navFloatingProfile");
const btnChangeInformation = document.querySelector("#btnChangeInfo");
const allInput = document.querySelector("input[type=range]");
const introProfile = document.querySelector("#introProfile");
const buyList = document.querySelector("#buyList");
const changeInformation = document.querySelector("#changeInformation");
let status = true;
function changeHandler(){
    if(status){
        btnNavProfile.className += " btnNavProfile-open";
        navFloatingProfile.className += " navFloatingProfile-open";
        glassBack.className += " glassBack-open";
        status = !status;
    }
    else{
        btnNavProfile.className = "btnNavProfile";
        navFloatingProfile.className ="navFloatingProfile padd";
        glassBack.className = "glassBack";
        status = !status;
    }
}
function hid1(){
    introProfile.style = "display: none";
    buyList.style = "display: none";
    changeInformation.style = "display: flex";
    changeHandler();
}
function hid2(){
    introProfile.style = "display: none";
    buyList.style = "display: flex";
    changeInformation.style = "display: none";
    changeHandler();
}
btnChangeInformation.addEventListener("click", (event) => {
    event.preventDefault();
    allInput.forEach((item) => {
        item.value = "";
    })
})
