const { faker } = require('@faker-js/faker');
const mysql= require('mysql2');

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"delta_app",
    password:"gskgskgsk24",
});

let q="INSERT INTO "
// try{
    // connection.query("SHOW TABLES",(err,result)=>{
        // if(err) throw err;
        // console.log(result);
    // });
// }catch (err){
    // console.log(err);
// }
// 
connection.end();

let createRandomUser = ()=> {
  return [
     faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};
