const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("Will return promotions to you soon!");
  })

  .post((req, res, next) => {
    res.end(
      "Will add the promotion: " +
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
    res.end("Deleting all the promotions");
  });

promoRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("Will return details of promotion: " + req.params.promoId);
  })

  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("Post not supported for promotion: " + req.body.name);
  })

  .put((req, res, next) => {
    res.write("Updating the promotion: " + req.params.promoId + "\n");
    res.end(
      "Will update the promotion: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })

  .delete((req, res, next) => {
    res.end("Deleting the promotion: " + req.params.promoId);
  });

module.exports = promoRouter;
