"use strict";
let AllFoodArr = RetriveLocal();
//parsing from JS
function RetriveLocal() {
    var getJson = localStorage.getItem('Foods')
    if (getJson != null)
        return JSON.parse(getJson);
}

RenderMenu();

function RenderMenu() {
    let Table = document.getElementById("myresturant");
    for (let i = 0; i < AllFoodArr.length; i++) {
        let Row = document.createElement('tr');
        Row.id = "rowid";

        let Data1 = document.createElement('td');
        Data1.innerHTML = AllFoodArr[i].ID;
        let Data2 = document.createElement('td');
        Data2.innerHTML = AllFoodArr[i].FoodName;
        let Data3 = document.createElement('td');
        Data3.innerHTML = AllFoodArr[i].Type;
        let Data4 = document.createElement('td');
        Data4.innerHTML = AllFoodArr[i].Price;

        Row.appendChild(Data1);
        Row.appendChild(Data2);
        Row.appendChild(Data3);
        Row.appendChild(Data4);
        Table.appendChild(Row);
    }
}

const NamesArr = [];//for  food names
const Prices = [];//for food price

for (let i = 0; i < AllFoodArr.length; i++) {
    NamesArr[i] = AllFoodArr[i].FoodName;
    Prices[i] = AllFoodArr[i].Price;
}
DrawBarChart(NamesArr, Prices)

//Draw Bar chart
function DrawBarChart(Arr1, Arr2) {
    const data = {
        labels: Arr1,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#9EB23B',
            borderColor: '#9EB23B',
            data: Arr2,
        }]
    };
    const config = {
        type: 'bar',
        data: data,
        options: {}
    };
    const myChart = new Chart(
        document.getElementById('myChart1'),
        config
    );
}


const TypesArr = ["Fruit and vegetables", "Starchy", "Dairy", "Protein", "Fat"];
const TypesCount = [];

for (let i = 0; i < TypesArr.length; i++) {
    TypesCount[i]=0;
    for (let x = 0; x < AllFoodArr.length; x++) {
        if (TypesArr[i] === AllFoodArr[x].Type) {
            TypesCount[i]++;    
        }
    }
}
DrawBieChart();
//Draw the bie chart
function DrawBieChart() {
    const data = {
        labels: TypesArr,
        datasets: [{
            label: 'Food Type Chart',
            data: TypesCount,
            backgroundColor: [
                '#FCF9C6',
                ' #9EB23B',
                '#C7D36F',
                '#E0DECA',
                '#C4DFAA'
            ],
            hoverOffset: 4
        }]
    };
    const config = {
        type: 'pie',
        data: data,
    };
    const myChart = new Chart(
        document.getElementById('myChart2'),
        config
    );
}
