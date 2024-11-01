const fs = require("node:fs");

fs.writeFile("hello.txt", "Hello Raghav", function (err) {
  if (err) console.error(err);
  else console.log("Done");
});
