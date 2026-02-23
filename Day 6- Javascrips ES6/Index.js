//Arrow functions and template literals
const greet = (name) => {
    
    //console.log(`Hello, ${name}`);
};

greet('Safalta');

//Array methods

//Push and pop

const numbers =[1,2,3,4,5];

numbers.push(10);

//console.log(numbers);

numbers.pop();
//console.log(numbers);

//Map

const numberList=[20,30,40,50,60];

const doubleNumbers=numberList.map((number) => {
    return number *2;
});

//console.log(doubleNumbers);

//filter


const evenNumbers=numberList.filter((number)=>{
    return number%2===0;
});

//console.log(evenNumbers);

//Reduce

const totalSum=numberList.reduce((accumulator,currentValue)=>{
   // console.log(accumulator,currentValue);
    return accumulator+currentValue;
},0);

//console.log(totalSum);

//Slice and splice

const fruits=['Apple','Banana','Cherry','Mango'];

//Slice

const slicedFruits=fruits.slice(1);

//console.log(slicedFruits);

//Splice

const splicedfruits= fruits.splice(1,2,'Orange','Pineapple');

//console.log(splicedfruits);
//console.log(fruits);

//Spread operations

const names=['Alice','Bob','Charlie'];

//console.log(...names);

const updatedNames=[...names,'David','Eve'];

//console.log(updatedNames);

const user ={
    name:'Safalta',
    age:21,
    address:'Kohity,Kathmandu',
};

const updatedUser={...user, isStudent:true};

//console.log(updatedUser);

//Destructing

const[firstName,secondName]=names;

//console.log(firstName,secondName);

const {name,address}=user;

//console.log(name,address);


