"use strict";
const AllFood = [];
// main constructor
function FoodConstructer(FoodName, Type, Price) {
    this.FoodName = FoodName;
    this.Type = Type;
    this.Price = Price;
    this.ID= this.CreatID();
    AllFood.push(this);
}
//creat random 4d ID
FoodConstructer.prototype.CreatID = function () {
    const ID = Math.floor(1000 + Math.random() * 9000);
    return ID;
}
//handling submit
const formEl = document.getElementById("formID");
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let FoodName = event.target.FoodName.value;
    let Type = event.target.FoodType.value;
    let Price = event.target.Price.value;
    let newfood = new FoodConstructer(FoodName, Type, Price);
    formEl.reset();  
    saveData(); 
}

//Save to LS
function saveData() {
    let strifyedData = JSON.stringify(AllFood);
    localStorage.setItem("Foods", strifyedData);
    console.log(strifyedData);
}