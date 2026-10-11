const figlet = require("figlet");

// This generates a cool ASCII art banner in your terminal
figlet("Gayatri Kulkarni!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
