const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("testpassword", "salt", 5000000, 50, "sha512", () => {
  console.log("1 - cryptoPBKDF2 done");
});

crypto.pbkdf2("testpassword", "salt", 5000000, 50, "sha512", () => {
  console.log("2 - cryptoPBKDF2 done");
});

crypto.pbkdf2("testpassword", "salt", 5000000, 50, "sha512", () => {
  console.log("3 - cryptoPBKDF2 done");
});

crypto.pbkdf2("testpassword", "salt", 5000000, 50, "sha512", () => {
  console.log("4 - cryptoPBKDF2 done");
});
