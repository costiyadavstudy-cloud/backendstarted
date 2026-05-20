import mongoose from "mongoose";
import express from "express";
import { Employee } from "./model.js";
import path from "path";
//import ends here 


let names = ["vardhan", "harsh", "nidhi", "vinay", "vihan", "aviral", "vedant", "akash", "naalin", "karan"]
let salary = [1200000,230000,900000,234122,83999]
let city  = ['tokyo','shibuya','mumbai','newDelhi','bhilwara']
let language = ['ruby','c++','c','javascript','python']
let conn = await mongoose.connect("mongodb://localhost:27017/employees")
const app = express()
const port = 3000

app.use(express.static("public"));
//declartion ends here

function random(upperlimit) {
    return Math.floor(Math.random() * upperlimit)               
}



//random number funciton ends here

app.post('/', (req, res) => {
    for (let i = 0; i < 11; i++) {
        let employeesData = new Employee({name: names[random(10)], salary: salary[random(5)], language: language[random(5)], city: city[random(5)], isManager: random(1)})
        employeesData.save()   
    }
 
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
