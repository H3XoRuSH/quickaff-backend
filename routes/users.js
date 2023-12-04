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
    const {
      student_id,
      last_name,
      first_name,
      middle_name,
      nickname,
      course,
      up_mail,
      app_batch,
      mem_status,
      renewal_payment_status,
      committee,
    } = req.body;
    pool
      .query(
        "INSERT INTO users (\
        student_id,\
        last_name,\
        first_name,\
        middle_name,\
        nickname,\
        course,\
        up_mail,\
        app_batch,\
        mem_status,\
        renewal_payment_status,\
        committee\
      )\
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)\
      ON CONFLICT (student_id) DO UPDATE\
      SET\
        last_name = EXCLUDED.last_name,\
        first_name = EXCLUDED.first_name,\
        middle_name = EXCLUDED.middle_name,\
        nickname = EXCLUDED.nickname,\
        course = EXCLUDED.course,\
        up_mail = EXCLUDED.up_mail,\
        app_batch = EXCLUDED.app_batch,\
        mem_status = EXCLUDED.mem_status,\
        renewal_payment_status = EXCLUDED.renewal_payment_status,\
        committee = EXCLUDED.committee\
      RETURNING *",
        [
          student_id,
          last_name,
          first_name,
          middle_name,
          nickname,
          course,
          up_mail,
          app_batch,
          mem_status,
          renewal_payment_status,
          committee,
        ]
      )
      .then((result) => {
        res
          .status(201)
          .send(`User added with ID: ${result.rows[0].student_id}`);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
  });

router.get("/new", (req, res) => {
  res.send("New User Form");
});

router.get("/:student_id", (req, res) => {
  const student_id = parseInt(req.params.student_id);
  pool
    .query("SELECT * FROM users WHERE student_id = $1", [student_id])
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = router;
