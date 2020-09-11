const users = require("../users/userDb");

const validateUserId = () => {
  return (req, res, next) => {
    users
      .getById(req.params.id)
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(404).json({ message: "User Not Found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: "Could Not Obtain User" });
      });
  };
};

const validateUser = () => {
  return (req, res, next) => {
    if (!req.body.name) {
      return res.status(400).json({ messgae: "Missing Name" });
    } else {
      next();
    }
  };
};

const validatePost = () => {
  return (req, res, next) => {
    if (!req.body.text || !req.body.user_id) {
      return res.status(400).json({ messgae: "Missing Text" });
    } else {
      next();
    }
  };
};

module.exports = {
  validateUserId,
  validateUser,
  validatePost,
};
