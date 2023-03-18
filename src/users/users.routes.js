const { Router } = require("express");
const pool = require("../config/db");

const userRouter = Router();

userRouter.get('/',async(req,res)=>{
     let results = pool.query(`SELECT * FROM my_db`);
     res.status(200).send(results);
});

userRouter.post('/',async(req,res)=>{
    const {username,password} = req;
    try{
        if(username && password){
            pool.query(`INSERT INTO my_db('${username}','${password}')`);
            res.status(200).send('done');
        }
    }catch(err){
        console.log(err);
    }
})

module.exports = userRouter;