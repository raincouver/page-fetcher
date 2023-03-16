// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

// writeFileSync

// fs
'use strict';
const fs = require('fs');

const args = process.argv.slice(2);

// console.log(args);

const request = require('request');

const fs1 = require('fs').promises;


request(`${args[0]}`, (error, response, body) => {

  setTimeout(() => {

    fs.writeFile(`${args[1]}`, body, err => {
      if (err) {
        console.error(err);
      }
      
        setTimeout(() => {
          // file written successfully
          // paste following snippet inside of respective `async` function
          const fileStats = fs1.stat(`${args[1]}`);
          // fileStats.size
          console.log(`Downloaded and saved  ${body.length} bytes to ${args[1]}`);
         });
    });
  });

  // console.log('errorCode:', error);
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});





