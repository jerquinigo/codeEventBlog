let express = require("express")
const app = express()
const bodyParser = require("body-parser")
const passport = require("passport");
const session = require("express-session");


let postsRouter = require("./routes/posts.js")
let threadsRouter = require("./routes/threads.js")
let usersRouter = require("./routes/users.js")
let sessionRouter = require("./routes/sessions.js")

app.use(
  session({
    secret: "codebrews",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/api/threads", threadsRouter);
app.use("/api/posts", postsRouter);
app.use("/api/sessions", sessionRouter);
app.use("/api/users", usersRouter);


// app.use(function(req, res, next) {
//   next(createError(404));
// });




app.listen(3100, () => {
    console.log("port 3100");
  });