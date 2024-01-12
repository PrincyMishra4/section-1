const phoneList = [
    { brand : 'Oneplus', model : '11R', price : 45000, colors : ['blue', 'black', 'red'] },
    { brand : 'Oneplus', model : 'Nord 2', price : 32000, colors : ['grey', 'black'] },
    { brand : 'Apple', model : 'iphone 14', price : 70000, colors : ['black', 'red'] },
    { brand : 'Nokia', model : '3310', price : 1200, colors : ['grey', 'white', 'black'] },
    { brand : 'Xiaomi', model : '12 Pro', price : 34000, colors : ['blue', 'yellow'] },
    { brand : 'Vivo', model : 't1', price : 56000, colors : ['red', 'black'] },
];

const budgetPhones = phoneList.filter( (phone) => { return phone.price <= 50000 } );

console.log(budgetPhones);

// filter phones having red color

console.log( [2, 5, 8, 3, 1].includes(50) );

const redPhones = phoneList.filter( (phone) => { return phone.colors.includes('red') } );

console.log(redPhones);

const brandName = 'no';

const result = phoneList.filter( (phone) => { return phone.brand.toLowerCase() === brandName.toLowerCase() } );
const result2 = phoneList.filter( (phone) => { return phone.brand.toLowerCase().includes(brandName.toLowerCase()) } );

console.log(result2);

console.log( 'oneplus'.includes('two') );