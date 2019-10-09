let express = require("express")
const app = express()
const bodyParser = require("body-parser")


let postsRouter = require("./routes/posts.js")
let threadsRouter = require("./routes/threads.js")



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/threads", threadsRouter);
app.use("/posts", postsRouter)

// app.use(function(req, res, next) {
//   next(createError(404));
// });




app.listen(3100, () => {
    console.log("port 3100");
  });