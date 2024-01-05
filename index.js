// ----- express -----

var express = require("express")


// ----- server -----

var app = express()


// ----- db -----

var db = require("./configs/mongoose")


// ----- port -----

var port = 9090;


// ----- url encoded -----

app.use(express.urlencoded());


// ----- session -----

// var session = require("express-session")


// ----- passport -----

// var passport = require("passport")


// ----- passport local stratagy -----

// var passportJwt = require("./configs/passport-jwt")


// ----- session object -----

// app.use(session({
//     name: "niraj",
//     secret: "niraj",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 1000 * 60 * 100
//     }
// }))


// ----- passport initilization -----

// app.use(passport.initialize())


// ----- passport session -----

// app.use(passport.session())


// ----- post routing -----

app.use("/post", require("./routes/API/V1/post/post"))


// ----- server connection -----

app.listen(port, (err) => {

    err ? console.log(err) : console.log(`server running on ${port}`)

})