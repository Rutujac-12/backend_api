import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send("day1 is there!!!!!!!!!!!!!!");
});

const PORT=3000;
app.listen(PORT,()=>
{
    console.log("server is listening");
})