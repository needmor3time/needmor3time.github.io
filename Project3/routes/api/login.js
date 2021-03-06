const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/login"
router.route("/")  //<--do I need to point this to something like /user?
  .get(userController.findOne)
  .post(userController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;