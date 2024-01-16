


// ? typescript learning --
// let name: string;
// let age: number; 
// let isStudent: boolean;

// * union - a variable can be both number and string
// let age: number | string; 

// * the any type can be anything
// * not reccommended to use any because then you may as well use javascript
// let anyType: any;
// * recommended instead of any, also takes any type
// let personName: unknown;

// * array of strings : array of numbers
// let hobbies: string[];
// let count: number[];
// * TUPLE can contain one number and one string
// let role:[number, string];
// role = [5, 'string'];

// * implicity name has an 'any' type
// function consoleName(name: string) {
//   console.log(name);
// }
// consoleName('ben');

// * ways to define a function => can return number, string etc...
// let printName: (name: string) => void; // never
// * void returns undefined, never will not return anything


// setting the types of your object
// usually capital letter
// a ? makes the key unnecessary
// * type Person = {
// * name: string;
// * age?: number;
// * }

// * setting your object after it is established
// * needs all applicable fields, otherwise will break app
// let person: Person = {
//   name: 'ben',
//   age: 32,
// }

// * an array of the person object
// let lotsOfPeople: Person[];

// * interface vs type
// * getting your variables to work together
// * order matters, interface then type ...
// interface Person {
//   name: string;
//   age?: number;
// }
// type X = Person & {
//   a: string,
//   b: number,
// }
// ? typescript learning --












# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
