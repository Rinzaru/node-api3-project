const express = require("express");
const logger = require("./middleware/logger");
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");
const cors = require("cors");
const server = express();
const port = 8000;

server.use(express.json());
server.use(
  cors({
    methods: ["GET"],
  })
);
server.use(logger());
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);
server.use(userRouter);
server.use(postRouter);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
