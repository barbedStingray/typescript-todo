import React from 'react';
import './App.css';



let name: string;
// let age: number; 
let isStudent: boolean;


// union - a variable can be both number and string
let age: number | string; 

// the any type can be anything
// not reccommended to use any because then you may as well use javascript
let anyType: any;
// recommended instead of any, also takes any type
let personName: unknown;

// array of strings : array of numbers
let hobbies: string[];
let count: number[];
// TUPLE can contain one number and one string
let role:[number, string];
role = [5, 'string'];

// functions
// implicity name has an 'any' type
function consoleName(name: string) {
  console.log(name);
}
consoleName('ben');

// ways to define a function => can return number, string etc...
let printName: (name: string) => void; // never
// void returns undefined, never will not return anything


// setting the types of your object
// usually capital letter
// a ? makes the key unnecessary
type Person = {
  name: string;
  age?: number;
}

// setting your object after it is established
// needs all applicable fields, otherwise will break app
let person: Person = {
  name: 'ben',
  age: 32,
}

// an array of the person object
let lotsOfPeople: Person[];

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
