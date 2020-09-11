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

module.exports = {
  validatePostId,
};
