const fs = require("fs");

const data = "Hi I want to learn node js file system ";
if (!fs.existsSync("./message.txt")) {
  fs.writeFile("message.txt", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved");
  });
} else {
  console.log("message file is already created");
}

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
