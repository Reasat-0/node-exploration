const fs = require("fs");

const a = 100;

setImmediate(() => console.log("Set Immediate Done...."));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading done...");
});

setTimeout(() => {
  console.log("Set Time out Done....");
}, 13);

function printSomething() {
  console.log("Print Something...", a);
}

printSomething();
console.log("FIle Last line....");
