const express = require("express");
const router = express.Router();
const pool = require("../db");

router
  .route("/")
  .get((req, res) => {
    pool
      .query("SELECT * FROM users")
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
  })
  .post((req, res) => {
    const { name } = req.body;
    pool
      .query("INSERT INTO users (name) VALUES ($1) RETURNING *", [name])
      .then((result) => {
        res.status(201).send(`User added with ID: ${result.rows[0].id}`);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
  });

router.get("/new", (req, res) => {
  res.send("New User Form");
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool
    .query("SELECT * FROM users WHERE id = $1", [id])
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = router;
