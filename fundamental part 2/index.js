"use strict";
var name = "bhuban ghimire";

// function decleration
function sum() {
  console.log("doesnot return anything");
}

function sum(a, b) {
  sum = a + b;
  return sum;
}
var result1 = sum(5, 4);

console.log(`result data is ${result1}`);

function sum3(a = 8, b = 4) {
  sum = a + b;
  console.log(sum);
}
sum3();

//function expression
const sum_declear = function (a, b) {
  var sum = a + b;
  console.log(sum);
  return sum;
};
const result = sum_declear(20, 4);
console.log(result);

//arrow function
const age = (birthYear) => 2022 - birthYear;
const present_age = age(1998);
console.log(`present age is ${present_age}`);

//arrow function with mutiple code
const yearRemaining = (name, birthYear) => {
  var ageNow = 2021 - birthYear;
  console.log(ageNow);
  var yearRemain = 65 - ageNow;
  return `${name} retires after ${yearRemain} years!`;
};
console.log(yearRemaining("bhuban", 1998));

//function inside function
function Double(a) {
  return a * 2;
}

function DoubleSum(a, b) {
  a = Double(a);
  b = Double(b);
  var sum = a + b;
  return `sum of ${a} and ${b} is ${sum}`;
}

console.log(DoubleSum(4, 9));

//Function summary: traditional function, anomous function, arrow function

//Chapter: ARRAY
var friends = ["bhuban", "shakushal", "Ramesh", "Hari"];
// print(friends)
console.log(friends);
console.log(friends[friends.length]); // it gives undefined length range from 0 to length-1
console.log(friends[friends.length - 1]);

friends[3] = "januka";
console.log(friends);
console.log(friends[3]);

const myData = ["bhuban", "ghimire", 1998, "Python Developer"];

const ageClc = (year) => {
  return 2022 - 1998;
};
var myAge = ageClc(myData[2]);

console.log(`my age is ${myAge}`);

//Basic operations on array
friends.push("test"); // adds data on last and returns length
friends.pop(); // removes data from last and returns removed data
friends.unshift("test"); // adds data on start
console.log(friends.indexOf("test"));
console.log(friends.includes("test"));
console.log(friends.includes("test1"));

//json objects
const myProfile = {
  firstName: "Bhuban",
  lastName: "Ghimire",
  birthYear: 1998,
  friends: ["bhuban", "shakushal", "Ramesh", "Hari"],
  profession: "Python Developer",

  // calcAge: function (birthYear){
  //     return 2022-birthYear
  // },

  calcAggs: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  // calcAgePointer: function (){
  //     console.log(this)
  //     return 2022-this.birthYear
  // }
};

console.log(myProfile);
console.log(myProfile.firstName);
console.log(myProfile["friends"]);
// console.log(myProfile.calcAge(myProfile.age))
// console.log(myProfile.calcAge(myProfile["age"]))
// console.log(myProfile.calcAgePointer())

console.log("loop break");
console.log(myProfile);
console.log(myProfile.calcAggs());
console.log(myProfile);

// loop example

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 10; i > 0; i -= 2) {
  console.log(i);
}
var value = 10;

while (value > 0) {
  console.log(`this loop value is ${value}`);
  value -= 1;
  if (value == 5) {
    break;
  }
}
