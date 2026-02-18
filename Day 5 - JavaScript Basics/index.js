// Variables in JavaScript

var fullName ='Safalta Joshi';
let address = 'Kathmandu, Nepal';
const bloodGroup='B+';

console.log(fullName);
console.log(address);
console.log(bloodGroup);

//Data Types

let name= 'Safalta';
let age =21;
let isStudent= true;
let hobbies=['coding','sleeping','eating'];


let user ={
    name:'Safalta',
    age :21,
    isStudent:true,
    hobbies:['coding','sleeping','eating']
};
console.log(hobbies[0]);

console.log(user['name']);
console.log(user.age);

//Funstion

function greet(name) {
    console.log('Hello',name);
}

greet('Safalta');

//Dom manipulation

const headingElementById= document.getElementById('heading-2');

console.log(headingElementById);

const headingElementByQuery = document.querySelector('#heading-2');

const paragraphElement=document.querySelector('.para');

paragraphElement.textContent='This is updated paragraph';
paragraphElement.style.color='blue';

const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click',function() {
    alert('Button Clicked!');
    console.log('Button clicked');

});