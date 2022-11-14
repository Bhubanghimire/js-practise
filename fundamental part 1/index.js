console.log("bhuab ghimigre");
// alert("message from js")

let firtName = "Bhuban"; // ok
console.log(firtName);

let first="bhuban"; // ok

let first_name = "bhuban"; // Not ok it is not django it is not standard

console.log(typeof first_name)


//talking about string

const fullName="Bhuban Ghimire"
const age = 23
const profession = "Python Developer"

const profile = "I'm "+fullName+ " ,i am "+ age +"years old and i am working as "+ profession; // in general
console.log(profile)

const template_literal = `I'm ${fullName},i am ${age} years old and i am working as ${profession}`; // in template and always use this
console.log(template_literal)

//if condition example
const herage=18

if (age<=17){
    console.log(`her age is ${age} you should not make her gf.`)
}
else{
    console.log(`Congratulations! her age is ${age} you can make her gf.`)
}

//Type conversion
const myAge=23
console.log(typeof myAge);
console.log(typeof String(myAge));
console.log("my age is "+myAge); // makes my age variable as string


//Type Corecion
console.log(1+2+"4"); // number to string
console.log(11-"2"-"1"); //string to number
console.log("20"/"2");
console.log("20"*"2");

//Truthy and falsy value
// falsy values are: 0,"",NaN,null,undefined

var money;

if (money){
    console.log("you defined money.");
}
else{
    console.log("money is undefined");
}
money = 0;
if (money){
    console.log("you have money.");
}
else{
    console.log("money is 0");
}

var name1 = "Bhuban";
if (name1){
    console.log(`your name is ${name1}`)
}



// Equality operators

// == performs type Corecion.eg: '18'==18 is true. but === is strict comparision, both side should be exactly 
// same like '18'==18 returns false:one string another number

var fav_num = Number(prompt("Enter lucky number"));

if (fav_num===18){
    console.log(`you enter  and type is ${typeof fav_num}`);
}
else if (fav_num !==19){
    console.log(` you are in else block`);
}
else{
    console.log(`you enter ${fav_num} and type is ${typeof fav_num}`);
}
