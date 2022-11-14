// Assignemt 1
markMass = 78;
johnMass = 92;
markHeight = 1.69;
johnHeight = 1.95;

markBMI = markMass/(markHeight*markHeight)
JohnBMI = johnMass/(johnHeight*johnHeight)

if (markBMI>JohnBMI){
    markHigherBMI="mark has higher BMI than John"
}
else{
    markHigherBMI="mark has lower BMI than John"
}

console.log(markHigherBMI)



// Assignment 2
if (markBMI>JohnBMI){
    console.log(`Mark'sBMI (${markBMI}) is higher than John's (${JohnBMI})!`)
}
else{
    console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})!`)
}

(markBMI>JohnBMI)?console.log(`Mark'sBMI (${markBMI}) is higher than John's (${JohnBMI})!`):console.log(console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})!`));


// Assignment 3
dolphinsAverage = (96+108+89)/3;
koalasAverage = (88+91+110)/3;

if (dolphinsAverage>koalasAverage && dolphinsAverage>=100){
    console.log("Dolphins Wins");
}
else if(koalasAverage>dolphinsAverage && koalasAverage>=100){
    console.log("Koalas Wins");
}
else if(koalasAverage===dolphinsAverage && koalasAverage>=100  && dolphinsAverage>=100){
    console.log("both Wins");
}
else{
    console.log("None wins");
}


// Assignment 4
const bill=275;

if (bill>=50 && bill<=300){
    tip = bill*.15
    
}
else{
    bill = bill*.20
}
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip+bill}`)

