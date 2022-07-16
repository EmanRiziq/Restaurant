"use strict";
const AllFood =[];

function FoodConstructer( FoodName, Type, Price) {
    this.FoodName = FoodName;
    this.Type = Type;
    this.Price = Price;
    this.CreatID();
    AllFood.push(this);

}
FoodConstructer.prototype.CreatID=function () {
    const ID = Math.floor(1000 + Math.random() * 9000);
   this.FoodID=ID;
}

function RenderMenu ()
{

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "ID";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Type";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Price";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);

for(let i=0; i<AllFood.length;i++)
{
// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = AllFood[i].ID;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = AllFood[i].FoodName;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = AllFood[i].FoodType;
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = AllFood[i].Price;

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);
}
}

const formEl = document.getElementById("formID");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
   let FoodName = event.target.firstname.value;
    let FoodType = event.target.FoodType.value;
    let Price = event.target.Price.value;
    
FoodConstructer(FoodName,FoodType,Price);
RenderMenu();
}

