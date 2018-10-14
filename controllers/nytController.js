const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    const params = Object.assign(
      { api_key: "5cf8cfb3a29b44ff819ca2293d16f579" },
      req.query
    );
    axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params
      })
      .then(response => {
        db.Article
          .find()
          .then(dbArticles =>
            response.data.response.docs.filter(article =>
              dbArticles.every(
                dbArticle => dbArticle._id.toString() !== article._id
              )
            )
          )
          .then(articles => res.json(articles))
          .catch(err => res.status(422).json(err));
      });
  }
};
