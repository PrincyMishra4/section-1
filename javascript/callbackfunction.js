const prodNums = (x, y) => {
    return x*y;
}

// calling the function
let p = prodNums(5, 6);
console.log(p);

//passing the functin
let q = prodNums; 
console.log(q(5,6));
console.log(q(2, 9));
console.log(q(7, 17));


const printResult = (name, percentage) => {
    console.log(`Result of ${name} is ${percentage}%`);
}

const createResult = (name, m1, m2, m3, m4, cb) => {
    const percent = (m1+m2+m3+m4)/4;
    cb(name, percent);
   
}
createResult('Raju',45, 67, 78, 89, printResult);
