const express = require("express");
const users = require("../users/userDb");
const router = express.Router();
const {
  validateUserId,
  validateUser,
  validatePost,
} = require("../middleware/user");
const posts = require("../posts/postDb");
/***** GET REQUEST *****/
router.get("/", (req, res) => {
  // do your magic!
  users
    .get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error Getting Users" });
    });
});

router.get("/:id", validateUserId(), (req, res) => {
  // do your magic!
  res.status(200).json(req.user);
});

router.get("/:id/posts", validateUserId(), (req, res) => {
  // do your magic!
  users
    .getUserPosts(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: "Could Not Obtain Users Posts" });
    });
});

/***** POST REQUEST *****/
router.post("/", validateUser(), (req, res) => {
  // do your magic!
  users
    .insert(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error Adding User" });
    });
});

router.post("/:id/posts", validatePost(), validateUserId(), (req, res) => {
  // do your magic!
  posts
    .insert(req.body)
    .then((userPost) => {
      res.status(200).json(userPost);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error Adding Post" });
    });
});

/***** DELETE REQUEST *****/
router.delete("/:id", validateUserId(), (req, res) => {
  // do your magic!
  users
    .remove(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User Not Found" });
      }
    })
    .catch(() => {
      res.status(500).json({ error: "Error Deleting User" });
    });
});

/***** PUT REQUEST *****/
router.put("/:id", validateUser(), validateUserId(), (req, res) => {
  // do your magic!
  users
    .update(req.params.id, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(500).json({ error: "Error Editing User" });
    });
});

//custom middleware

// const validatePost = (req, res, next) => {
//   // do your magic!
// };

module.exports = router;
