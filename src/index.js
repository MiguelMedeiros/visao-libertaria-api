const videos = require("./videos");
const articles = require("./articles");
const targets = require("./targets");

module.exports = {
  // videos
  videoList: videos.getList,
  videoCategory: videos.getCategory,
  videoSearch: videos.getSearch,

  // articles
  articleList: articles.getList,
  articleCategory: articles.getCategory,
  articleSearch: articles.getSearch,

  // targets
  targetAll: targets.getAll,
  targetList: targets.getList,
  targetCategory: targets.getCategory,
  targetSearch: targets.getSearch,
};
