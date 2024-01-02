const user = {name : 'raju', rollno : 53675, email : 'raju@mail.com'}

console.log(user.name );
console.log(user['rollno']);
console.log(user.email);

user.location = 'Lucknow';
user.name = 'Princy Mishra';

console.log(user);

user.subjects = [ 'Math', 'Physics', 'Chemistry', 'Hindi', 'english' ];
console.log(user);

//smartphone
//key : brand, modal, price, colors

const smartphone = {brand : 'Oppo', modal : 'f17', price : '20000', colors : ['blue', 'black','red']};

smartphone.price = 30000;
smartphone.colors[1] = 'white';

console.log(smartphone);
console.log('-----------------------------------------');

const phoneList = [
    {brand : 'Oppo', modal : 'f17', price : '20000', colors : ['blue', 'black', 'red'] },
    {brand : 'Oneplus', modal : '11R', price : '45000', colors : ['blue', 'black',]},
    {brand : 'Apple', modal : 'iphone 14', price : '70000', colors : ['black', 'red']},
    {brand : 'Nokia', modal : '3310', price : '1200', colors : ['gray', 'white', 'black']},
    {brand : 'Xiaomi', modal : '12 Pro', price : '34000', colors : ['blue', 'yellow',]},
];

console.log(phoneList[0].price);
console.log(phoneList[0].colors[2]);
phoneList[3].colors[1] = 'blue';

console.log('----------------------------');

for(let phone of phoneList){
    console.log(phone.brand);
    console.log(phone.colors);

}

const brands = phoneList.map( (phone) => { return phone.brand });
console.log(brands);

const colorList = phoneList.map( (phone) => { return phone.colors });
console.log(new Set(colorList.flat()));

const laptop = {brand : 'Asus', modal : 'Vivobook 14', price : 52000};
console.log(laptop);
delete laptop.price;
console.log(laptop);







