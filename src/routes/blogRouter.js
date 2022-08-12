const router = require("express").Router();
const blogController = require("../controllers/blogController");


router.get("/", blogController.getAllDocument);
router.get("/:id", blogController.getOneDocument);
router.post("/", blogController.searchDocument);


module.exports = router;