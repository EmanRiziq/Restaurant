"use strict";
let AllFoodArr = RetriveLocal();
PrintMenu();
function RenderMenu() {
    let Table = document.getElementById("myresturant");
    // let Table=document.createElement('table');
    // Table.classname=("myresturant");

    // let mainel =document.getElementById('mainid');
    // mainel.appendChild(Table);

    // let Row1=document.createElement('tr');
    // let Haeding1=document.createElement('th');
    // Haeding1.textContent="ID";
    // let Haeding2=document.createElement('th');
    // Haeding2.textContent="Food Name";
    // let Haeding3=document.createElement('th');
    // Haeding3.textContent="Food Type";
    // let Haeding4=document.createElement('th');
    // Haeding4.textContent="Price";
    // Row1.appendChild(Haeding1);
    // Row1.appendChild(Haeding2);
    // Row1.appendChild(Haeding3);
    // Row1.appendChild(Haeding4);
    // Table.appendChild(Row1);

    for (let i = 0; i < AllFoodArr.length; i++) {
        // Creating and adding data to second row of the table
        let Row2 = document.createElement('tr');
        Row2.id="rowid";
        console.log(Row2.id);
        console.log(Row2);

        let Data1 = document.createElement('td');
        Data1.innerHTML = AllFoodArr[i].ID;
        let Data2 = document.createElement('td');
        Data2.innerHTML = AllFoodArr[i].FoodName;
        let Data3 = document.createElement('td');
        Data3.innerHTML = AllFoodArr[i].Type;
        let Data4 = document.createElement('td');
        Data4.innerHTML = AllFoodArr[i].Price;

        Row2.appendChild(Data1);
        Row2.appendChild(Data2);
        Row2.appendChild(Data3);
        Row2.appendChild(Data4);
        Table.appendChild(Row2);
    }
}

function RetriveLocal() {
    var getJson = localStorage.getItem('Foods')
    if (getJson != null)
        return JSON.parse(getJson);
}
function PrintMenu() {
    for (let i = 0; i < AllFoodArr.length; i++) {
        RenderMenu(AllFoodArr[i]);
    }
}