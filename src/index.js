console.log("Hello World");
import wishlist from "./wishlist";

// Exercise 5
let vfrmCar = document.getElementById("submitForm");
let vinpMake = document.getElementById("makeInput");
let vinpModel = document.getElementById("modelInput");
let vinpYear = document.getElementById("yearInput");
let vparMake = document.getElementById("car-make");
let vparModel = document.getElementById("car-model");
let vparYear = document.getElementById("car-year");
let vbtnRemove = document.getElementById("remButton");
let vul_List = document.getElementById("wishlist-ul");

vfrmCar.addEventListener("submit", (event) => {addCar(event)});
//document.getElementById("remButton").addEventListener("click", (event) => {removeCar(event)});
vbtnRemove.addEventListener("click", (event) => {removeCar(event)});
let myWishlist = new wishlist();

//Exercise 6
function showCarDetails(car) {
    vparMake.textContent = car.make;
    vparModel.textContent = car.model;
    vparYear.textContent = car.year;
    vbtnRemove.disabled = false;
    vbtnRemove.setAttribute("data-carId", car.id);
}

//Exercise 7
function updateDOMList() {
    vul_List.innerHTML = "";
    myWishlist.list.forEach(car => {
      const tmpLI = document.createElement("li");
      tmpLI.textContent = `${car.make} ${car.model}`;
      tmpLI.addEventListener("click", (event) => showCarDetails(car));
      vul_List.appendChild(tmpLI);
    })}

//Exersize 8
function addCar(event) {
        event.preventDefault(); 
        myWishlist.add(vinpMake.value, vinpModel.value, vinpYear.value);
        updateDOMList();
        vinpMake.value = "";
        vinpModel.value = "";
        vinpYear.value = "";
      }

//Exercise 9
function removeCar(event) {
    const carID = Number(vbtnRemove.getAttribute("data-carId"));
    myWishlist.remove(carID);
    updateDOMList();
    vparMake.textContent = "";
    vparModel.textContent = "";
    vparYear.textContent = "";
    vbtnRemove.disabled = true;
}      

