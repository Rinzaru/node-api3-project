const express = require("express");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");
const server = express();
const port = 8000;

server.use(express.json());
// server.use(morgan("combined"));
server.use(logger());
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);
server.use(userRouter);
server.use(postRouter);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
