const posts = require("../posts/postDb");

const validatePostId = () => {
  return (req, res, next) => {
    posts
      .getById(req.params.id)
      .then((post) => {
        if (post) {
          req.post = post;
          next();
        } else {
          res.status(404).json({ message: "Posts Not Found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: "Could Not Obtain Posts" });
      });
  };
};

const validatePost = () => {
  return (req, res, next) => {
    if (!req.body.text) {
      return res.status(400).json({ messgae: "Missing Text" });
    } else {
      next();
    }
  };
};

module.exports = {
  validatePostId,
  validatePost,
};
