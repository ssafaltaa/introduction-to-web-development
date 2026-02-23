//* JavaScript ES6 Exercise

// ============================================
//* EXERCISE 1: Array Methods (push, pop, slice, splice)
// ============================================

// 1.1 Push and Pop
const fruits = ['apple', 'banana'];
// TODO: Add 'orange' to the end using push()
fruits.push('Orange');
console.log(fruits);

// TODO: Remove the last fruit using pop() and store it in a variable called removedFruit
const removedFruit=fruits.pop();
console.log(removedFruit);

// 1.2 Slice vs Splice
const numbers = [1, 2, 3, 4, 5];
// TODO: Use slice() to get [2, 3, 4]
const slicednum=numbers.slice(1,4);
console.log(slicednum);

// TODO: Use splice() to remove 2 and 3, and insert 'two' and 'three' in their place
const splicenum=numbers.splice(1,2, 'Two','Three');
console.log(splicenum);
console.log(numbers);

// ============================================
//* EXERCISE 2: Arrow Functions
// ============================================

// 2.1 Convert to arrow function and console.log using template literals
function greet(name) {
  console.log('hello ' + name);
}
// TODO: Rewrite greet as an arrow function and use template literals to log the greeting message
const greeting = (name) => {
  console.log(`hello, ${name}`);
};
greeting('Lumana');

// 2.2 Arrow function with multiple parameters
// TODO: Create an arrow function that adds two numbers
const number = (a,b) => {
  sum=a+b;
  console.log(`Sum: ${sum}`);
};
number(2,5);

// ============================================
//* EXERCISE 3: Map
// ============================================

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
];

// TODO: Use map() to extract only the names
const stdnames= students.map ((names) => {
  return names.name;
});
console.log(stdnames);

// ============================================
//* EXERCISE 4: Filter
// ============================================
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 80 },
];

// TODO: Filter products that cost less than $100
const price=products.filter((productprice)=>{
  return productprice.price < 100;
});
console.log(price);

// ============================================
//* EXERCISE 5: Reduce
// ============================================

const prices = [10, 20, 30, 40];

// TODO: Use reduce() to find largest price
const large= prices.reduce((acc,curr)=>{
  if (acc>curr){
    return acc;
  }else{
    return curr;
  }
}, 0);
console.log(large);
// ============================================
//* EXERCISE 6: Array Destructuring
// ============================================

const colors = ['red', 'green', 'blue'];
// TODO: Destructure to get first and second colors
const [firstcolor, secondcolor]=colors;
console.log(firstcolor, secondcolor);

// ============================================
//* EXERCISE 7: Object Destructuring
// ============================================

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

// TODO: Destructure to get firstName and age
const {firstName, age}=person;
console.log(firstName,age);

// TODO: Destructure with renaming: firstName as 'first'
const {firstName:first}=person;
console.log(firstName);

// TODO: Destructure with default values
const {firstname='John',lastName='unknown',Age=18,city='unknown'}=person;
console.log(firstname,lastName,Age,city);


// ============================================
//* CHALLENGE: Combine Everything
// ============================================

const employees = [
  { id: 1, name: 'Alice', department: 'IT', salary: 75000 },
  { id: 2, name: 'Bob', department: 'HR', salary: 65000 },
  { id: 3, name: 'Charlie', department: 'IT', salary: 80000 },
  { id: 4, name: 'Diana', department: 'Finance', salary: 70000 },
];

// TODO: Filter IT department employees
const IT= employees.filter((emp)=>{
  return emp.department==='IT';
})
console.log(IT);

// TODO: Map to get only name and salary
const details=employees.map((emp)=>{
  return {name:emp.name, salary:emp.salary};
});
console.log(details);

// TODO: Use reduce to calculate average IT salary
const avg= employees.reduce((acc,curr)=>{
   if (curr.department === "IT") {
    return acc + curr.salary;
  }
  return acc;
},0)/IT.length;
console.log(avg);

// TODO: Destructure the first employee's name and salary
const {name,salary}=employees[0];
console.log(name,salary);
