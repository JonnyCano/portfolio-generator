// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
const profileDataArgs = process.argv.slice(2, process.argv.length);
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

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

false.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});