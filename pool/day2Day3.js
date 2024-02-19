// Exercice A of LOOP 
//Task1: Factorial
// I'll use a while loop considering 
let n=5;
let j =1 //j is initialized to 1
let i=1 // i start with 1 up to the value of n
// while loop should continue as long as i is less than or equal to n
while (i>=n) {
    j = j*1;
    i++
}
console.log("the factorial of", n, "is", j)


// Task 2: How many digits?
let num = 123542;
let digits = 0; 
//loop to count the digits I will use the while loop 
while (num !==0) {
   num=num/10
   if (num>=1){
    count++
   } else if (num<= -1){
    count ++
   } else {
    break;
   }
console.log("the number of digits is" , count);

// Task 3
const treeHeight = 4; 

// Loop for each row of the tree
for (let i = 0; i < treeHeight; i++) {
    let row = '';

    // Spaces before stars
    for (let j = 0; j < treeHeight - i - 1; j++) {
        row += ' ';
    }

    // Stars for each row
    for (let k = 0; k < 2 * i + 1; k++) {
        row += '*';
    }

    console.log(row);
}
// Draw the trunk 
// Exercice B Functions 
// Task 1
function calculateFactorial(n) {
    let j = 1;
    let i = 1;
    while (i <= n) {
        j = j * i;
        i++;
    }

    console.log("The factorial of", n, "is", j);
}
// Task 2
function countDigits(num) {
    let count = 0;
    while (num !==0) {
        num=num/10
        if (num>=1){
         count++
        } else if (num<= -1){
         count ++
        } else {
         break;
        }
    console.log("The number of digits is", count);
}
console.log("the number of digits is" , count);
// Task 3
function getDayOfWeek(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
            break;
    }
}

// Task 4 
function findMaxNumber(a, b, c) {
    let maxNumber = a;

    if (b > maxNumber) {
        maxNumber = b;
    }

    if (c > maxNumber) {
        maxNumber = c;
    }

    console.log("The maximum number is", maxNumber);
}

// Task 5 
function assignGrade(score) {
    if (score > 85) {
        console.log("Grade is A");
    } else if (score > 70) {
        console.log("Grade is B");
    } else if (score > 55) {
        console.log("Grade is C");
    } else if (score > 40) {
        console.log("Grade is D");
    } else if (score > 15) {
        console.log("Grade is E");
    } else if (score <= 15) {
        console.log("Grade is F");
    }
}

// Exercice 2 
function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

function calculateCombination(n, p) {
    if (p > n) {
        return "Invalid input";
    } else {
        let numerator = calculateFactorial(n);
        let denominator = calculateFactorial(p) * calculateFactorial(n - p);
        return numerator / denominator;
    }
}

// Exercice 3
function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        case '%':
            return num1 % num2;
        case 'c':
            //Supposons que num1 et num2 soient des entiers
            function calculateFactorial(n) {
                let factorial = 1;
                for (let i = 1; i <= n; i++) {
                    factorial *= i;
                }
                return factorial;
            }
            return calculateFactorial(num1) / (calculateFactorial(num2) * calculateFactorial(num1 - num2));
        default:
            return "Invalid operator";
    }
}