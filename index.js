const express = require("express")
const passport = require("passport")
const session = require("express-session")
const app = express()
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }));
app.use(passport.initialize())
app.use(passport.session())

require("./auth")

function isLoggedIn(req,res,next){
    req.user ? next() : res.sendStatus(401)
}

app.get("/",(req,res)=>{
    res.send("<a href='/auth/google'>Signup using google</a>")
})


app.get("/auth/google",passport.authenticate("google",{scope:["email","profile"]}))

app.get("/google/callback", passport.authenticate("google",{
    successRedirect:"/protected",
    failureRedirect:"/"
}))


app.get("/protected",isLoggedIn,(req,res)=>{
    console.log(req.user)
    res.send("Hello" + req.user.displayName)
})







app.listen(4000,()=>{
    console.log("Port running")
})