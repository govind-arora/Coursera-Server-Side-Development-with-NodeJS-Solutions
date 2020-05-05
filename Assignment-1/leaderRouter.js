const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("Will return leaders to you soon!");
  })

  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        "with details" +
        req.body.description
    );
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put not supported");
  })

  .delete((req, res, next) => {
    res.end("Deleting all the leaders");
  });

leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("Will return details of leader: " + req.params.leaderId);
  })

  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("Post not supported for leader: " + req.body.name);
  })

  .put((req, res, next) => {
    res.write("Updating the leader: " + req.params.leaderId + "\n");
    res.end(
      "Will update the leader: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })

  .delete((req, res, next) => {
    res.end("Deleting the leader: " + req.params.leaderId);
  });

module.exports = leaderRouter;
