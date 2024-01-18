const express = require("express")
const ejs = require ("ejs")
const app = express()
const PORT = 5000


app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

let users =[
    {
        firstName: "Ayanrinde",
        lastName: "Gaius",
        email: "ayanrindegaius005@gmail.com",
    },

    {
        firstName: "Ayanrinde",
        lastName: "Gaius",
        email: "ayanrindegaius005@gmail.com",
    }
]

app.get("/",(req, res) =>{
    // res.send("Hello Node")
    // console .log("i am working");
    res.render("index", {name:"Gaius"})
})

app.get("/sign-in",(req, res) =>{
    res.render("sign-in")
})

app.get("/signup",(req, res) =>{
    res.render("signup");
    console.log(req.body);
})

app.get("/dashboard",(req, res) =>{
    res.render("dashboard", {users:users})
})

app.post("/register", (req,res) =>{
    console.log(req.body);
    users.push(req.body);
    console.log(users);
    // res.render("dashboard")
    res.redirect("/dashboard")
})

app.get("/welcome",(req, res) =>{
    res.sendFile(__dirname + "/index.html");
})

app.get("/login",(req, res) =>{
    res.sendFile(__dirname + "/login.html");
})

// app.get("/signup",(req, res) =>{
//     res.sendFile(__dirname + "/signup.html");
// })

// app.get("/dashboard",(req, res) =>{
//     res.sendFile(__dirname + "/dashboard.html");
// })

app.listen(PORT, (err)=>{
    if (err) {
        console.log("I cant run on port + PORT");
    } else {
        console.log("Am running on 5000");
    }
})