const router = require("express").Router();
const knivesController = require("../../controllers/knivesController");

// Matches with "/api/knives"
router.route("/")
  .get(knivesController.findAll)
  .post(knivesController.create);

// Matches with "/api/knives/:id"
router
  .route("/:id")
  .get(knivesController.findById)
  .put(knivesController.update)
  .delete(knivesController.remove);

module.exports = router;
