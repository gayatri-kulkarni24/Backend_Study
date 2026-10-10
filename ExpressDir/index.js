//basic server starting
const express = require("express");
const app=express();

let port=8080;

//handling requests
/*app.use((req,res)=>{
    //console.log(req);
    console.log("request received");
    /*res.send({              //sending response
        name:"apple",
        color:"red",
    });
    //res.send(console.log("this is basic respnse"));
   res.send('<h1>fruits</h1>');
});
*/
//routing
// app.get("/",(req,res)=>{
//     res.send("you contacted root path");
// });

// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });

// app.get("*",(req,res)=>{
//     res.send("this path does not exist");
// });

//path parameters
/*app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    // res.send("hello i am root");
    //also
     let {username,id}=req.params;
    // res.send(`welcome to the page of @${username}`);
    //also
    let htmlStr=`<h1>welcome to the page of @ ${username}!</h1>`;
    res.send(htmlStr);

});
*/

//query strings
app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q} =req.query;
    if(!q){
        res.send(`<h1>nothing searched</h1>`);
    }
    res.send(`<h1>search results for query :${q}</h1>`);
});

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});