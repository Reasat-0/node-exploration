// ( function (exports, module, require, __dirname, __filename) {

const mod2Arr = [1, 2, 3];

let a = "Module...";

module.exports = { mod2Arr, a };

// How module is found or the __fileName, __dirName these things are found. Its actually because of an IIFE
// which is working in the background....for NODE js
// And that IIFE takes {moduel, exports, __dirName, __fileName } as its params and returning module from it...
// So, when I am requiring a file like require("./module.js") then its receiving all the returned things from
// thar IIFE....

// })

// Commented codes are what is node js doing under the hood..
