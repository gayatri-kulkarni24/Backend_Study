//simple  code to print numbers
// let n=5;
// for(let i=0;i<n;i++)
// {
//     console.log("hello",i);
// }



//argument count command line arguments
// let args=process.argv;
// for(let i=2;i<args.length;i++)       //first two arguments are node and filename    then we can pass names of persons etc.
// {
//   console.log("hello to ",args[i]);
// }



//exports in files-- module.exports and require()
// const newValue=require("./math");
// console.log(newValue);
// console.log(newValue.sum(4,7));


//exports in directories
const info= require("./fruit");
console.log(info);


// const figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });