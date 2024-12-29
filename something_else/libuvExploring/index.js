const fs = require("fs");
const https = require("https");

console.log("First one....");

const a = 2423523;
const b = 32423423423;

// This is done by V8 itself and thread is used... Not by Libuv.....
fs.readFileSync("./file.txt", "utf-8");
console.log("File Read Synchronusly...");

// It will be passed to Libuv...
https.get("https://dummyjson.com/product/1", (res) =>
  console.log("Date Fetcheed..")
);

// It will be passed to Libuv...
setTimeout(() => {
  console.log("Hello...");
}, 5000);

// It will be passed to Libuv...
fs.readFile("./file.txt", "utf-8", (error, res) =>
  console.log("File Async loaded..")
);

// It is done by v8 itself and thread is used..
function multiply(x, y) {
  return x * y;
}

const c = multiply(a, b);
console.log(c);
