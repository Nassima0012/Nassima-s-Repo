//Task1
let firstname="Nassima";
let lastname="Benrahmoune";
const pi = 3.14;
let radius = 20;
let superhero = "wonderwoman";
let favoritequote = "what goes around, come back around";
//Task 2
//tell your name
let fullname = firstname + " " + lastname
console.log(fullname);

//maths
// using radius =pi*r*r
let area= pi*(radius*radius)
console.log(area)
//contaning perimetre =p*p/4pi
let perimeter = 2*pi*radius
let area= perimeter*perimeter/4*pi
console.log(area)
let motivation= "A wise man named"+ superhero+": "+favoritequote
console.log(motivation)
//variable SWAP
let a=3;
letb=10;
let exofa= a;
a=b;
b= exofa;
console.log("After swapping: a=", a, "and b=", b)

//Task 1: Even or Odd
let number= 3;
if(number % 2 ===0){
    console.log(number+ "is even");
} else{
    console.log(number+"is odd");
}
//Task 2: Days of the week 
let day= 4;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
        console.log("wednseday");
        break;
    case 4:
        console.log("thurdsday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("invalid day")               
}
//Task 3: Maximum 
let a = -15;
let b = 6;
let c = 2.6;
let maxNumber= a;
if (b > maxNumber){
maxNumber=b;
}
if (c > maxNumber) {
    maxNumber=c;
}
console.log("the maximum number is", maxNumber);

//Task 4:The teacher
let score = 83;
if (score > 85) {
    console.log("grade is A");
}
else if(score<=85 && score> 70){
    console.log("grade is B");
}
else if(score<=70 && score>55 ){
    console.log("grade is C");
}
else if (score<40 && score>50){
    console.log("grade is D")
}
else if(score<=40 && score>15){
    console.log(grade is E)
}
else if(score<=15){
    console.log(grade is D)
}