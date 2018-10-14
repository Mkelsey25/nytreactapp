const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nyt");
//const bookRoutes = require("./books");

// NYT routes
router.use("/articles", articleRoutes);

router.use("/nyt", nytRoutes);

// Book routes
//router.use("/books", bookRoutes);

module.exports = router;