const fs = require("fs");

setImmediate(() => console.log("Set Immediatee.... ")); // A

setTimeout(() => console.log(console.log(".............Set Timeout")), 0); // B

Promise.resolve().then(() => console.log("Promise......")); // C

fs.readFile("./file.txt", () => {
  setTimeout(
    () => console.log("////////////////// --------------2nd SetTimeout"),
    0
  );
  process.nextTick(() =>
    console.log("//////////////////------------ Next ticke")
  );

  setImmediate(() =>
    console.log("////////////////--------- 2nd Set Immediate")
  );

  console.log(
    "////////////////////// ---------------- File Reding Callback..."
  );
});

process.nextTick(() => console.log(".............. 2nd next tick")); // D
console.log("Last Line.....");
