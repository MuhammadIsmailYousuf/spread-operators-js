//Example 1; //Spread operator;
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
document.getElementById("demo").innerHTML = year;

//Example 2;
let a = ["2020", "2021", "2023"];
let b = ["2022", "2024", "2021"];
let c = ["2000", "2001", "2003"];

let data = [...a, ...b];
document.getElementById('demo2').innerHTML = data;


