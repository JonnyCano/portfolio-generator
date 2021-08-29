const fs = require('fs');
const generatePage = require('./src/page-template.js');

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);

// longer version
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// shorter version
const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
// };


// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// // This syntax does not create multi-line input
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// This syntax can create multi-line input. They appear exactly as they would
// if using a word processor

// const generatePage = (userName, githubName) => {
//     return `
//         Name: ${userName}
//         Github: ${githubName}
//     `;
// };

// const generatePage = (name, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
// };

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});

// // so this is an example of throwing an error from the MDN docs
// function getRectArea(width, height) {
//   if (isNaN(width) || isNaN(height)) {
//     throw 'Parameter is not a number!';
//   }
// }

// try {
//   getRectArea(3, 'A');
// } catch (e) {
//   console.error(e);
//   // expected output: "Parameter is not a number!"
// }
// // and these are error throw examples
// throw 'Error2'; // generates an exception with a string value
// throw 42;       // generates an exception with the value 42
// throw true;     // generates an exception with the value true
// throw new Error('Required');  // generates an error object with the message of Required
