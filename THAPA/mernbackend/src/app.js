const express = require("express");
const path =require ("path");
const app = express();
const hbs = require("hbs");
const { error } = require("console");

require("./db/conn");
const Register = require("./models/registers");
const { json } = require("express");

const port = process.env.port || 3000;

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// console.log(path.join(__dirname, "../public"));

app.use(express.static(static_path))
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index")
});

app.get("/register", (req, res) => {
    res.render("register")
});


app.get("/login", (req, res) => {
    res.render("login")
});

app.post("/register", async (req, res)  =>{
    try {
        // console.log(req.body.firstname);
        // res.send(req.body.firstname);
        const password = req.body.password;
        const cpassword = req.body.confirmPassword;

        if(password === cpassword){

            // console.log("Hello")
            // console.log(e)

            const registerEmployee  = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirmPassword: cpassword


            })

            const registered = await registerEmployee.save();
            res.status(201).render("index");

            // console.log(registered)

        }else{
            res.send("password are not matching");
        }

    }catch(e) {
        // console.log(e)
        res.status(400).send(error);
    }   
})

// Try to find by Name:

// app.post("/login", async(req, res) => {
//     try{

//         const email = req.body.email;
//         const password = req.body.password;

//         const useremail = await Register.findOne({email:email})
//         // res.send(useremail);
//         // console.log(password)

//         if(useremail.password === password) {
//             res.status(201).render("index");
//         }else{
//             res.send("invalid login details")
//         }

//         // console.log(`${email} and passworn is ${password}`)

//     } catch (error){
//         res.status(400).send("invalid login details")
//     }
// });

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})
