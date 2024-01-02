// WAP to check if a number is even

const num = 245;

if (num % 2 == 0) {
    console.log("Number is even");
    
}else{
    console.log("Number is odd");
}

const num1 = 77;

if (num1 % 7 === 0 && num1 % 11 === 0 ) {
    console.log("Number is divisible by 7 and 11");
    
}else if (num1 % 7 === 0) {
    console.log("Number is only divisible by 7");
    
}else if (num1 % 11 === 0) {
    console.log("Number is only divisible by 11");
    
}