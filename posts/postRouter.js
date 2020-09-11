const express = require("express");
const { validatePostId } = require("../middleware/post");
const router = express.Router();

const posts = require("../posts/postDb");

router.get("/", (req, res) => {
  // do your magic!
  posts
    .get()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(500).json({ error: "error retrieving posts" });
    });
});

router.get("/:id", validatePostId(), (req, res) => {
  // do your magic!

  res.status(200).json(req.post);
});

router.delete("/:id", validatePostId(), (req, res) => {
  // do your magic!
  posts
    .remove(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User Not Found" });
      }
    })
    .catch(() => {
      res.status(500).json({ error: "Error Deleting Post" });
    });
});

router.put("/:id", validatePostId(), (req, res) => {
  // do your magic!
  posts
    .update(req.params.id, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(500).json({ error: "Error Editing Post" });
    });
});

// custom middleware

module.exports = router;
