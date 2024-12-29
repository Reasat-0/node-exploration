const crypto = require("crypto");

console.log("First one....");

const a = 2423523;
const b = 32423423423;

// It will block the Thread.....
// IT will take time as it will block the thread....as the iteration is 2147483645
crypto.pbkdf2Sync("mypassword", "salt", 5000000, 10, "sha512");
console.log("Password Encrypted in synchronous way...");

// It will be passed to Libuv...
crypto.pbkdf2("mypassword", "salt", 50000, 10, "sha512", () => {
  console.log("Password encrypted.. in asynch way....");
});
// It is done by v8 itself and thread is used..
function multiply(x, y) {
  return x * y;
}

const c = multiply(a, b);
console.log(c);
