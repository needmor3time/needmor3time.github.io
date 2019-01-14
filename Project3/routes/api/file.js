const router = require("express").Router();
const fs = require('fs');
const Item = require("../../models/file")

// Matches with "/api/user"
router.route("/")
  .post(function(req,res){
    console.log("req.files", req.files);
    console.log("req.body", req.body);
    var newItem = new Item();
    newItem.img.data = fs.readFileSync(req.file.userPhoto.path)
    newItem.img.contentType = 'image/jpeg';
    newItem.save();
   });




// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
