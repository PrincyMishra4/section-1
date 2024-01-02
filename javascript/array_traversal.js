const nums = [3, 7, 9, 4, 7, 1, 5];

for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}

console.log("-----------------");
for(let n of nums){
    console.log(n);
}

console.log("---------------------");

nums.forEach( (n) => {console.log(n);} );

// let find 5
for(let n of nums){
    if(n === 5){
        console.log(('found 5'));
    }
};

// ** = power
// map function

 let newArr = nums.map( (n) => { return n**2 } );
 console.log(newArr);

 const prices = [20, 46, 600, 7440, 1800, 2440, 2840];

 const newprices = prices.map( (n) => { return n/10 })
 
 console.log( newprices );

 const names = ['raju', 'ramu', 'kaliya', 'shamu'];
  console.log( 'abc' .toUpperCase());

 const newnames = names.map( (n) => { return n.toUpperCase() });
 console.log(newnames);

 // Filter function

 const Allprices = [23000, 4600, 8570, 1200, 1433, 649, 4945, 200];
 // filter all prices which are greater than 2000

  const budgetprices = Allprices.filter( (p) => { return p>2000 });
    console.log(budgetprices);

    const newbudgetprices = Allprices.filter( (p) => { return p<5000 && p>2000} );
    console.log(newbudgetprices);


    //Wap to filter all even numbers from an array
    const evennumbers = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10];
    
    const newevennumbers = evennumbers.filter( (n) => { return n/2 ==0} );
    console.log(newevennumbers);

    //Wap to filter all names thats have length greater than 5 from an array of names.
    const Allnames = ['Princy', 'shipra', 'Bob', 'Abhi', 'vaishnavi', 'Anu'];

    const Allnewnames  = Allnames.filter( (n) => { return n.length > 5});
    console.log(Allnewnames);
    
    
 // Wap get first names from an array of fullnames.
   const fullnames = ["Princy Mishra", "Shipra Singh", "Vaishnavi chauhan", "Anu shukla"];

   const firstname = fullnames.map ( (f) => { return f.split(' ') [0] });
   console.log(firstname);

   console.log('-------------------------------');
   console.log('Princy Mishra'.split(' ') [0]);