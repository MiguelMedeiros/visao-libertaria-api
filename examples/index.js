const visaoLibertaria = require("./../src/index");

async function init() {
  // ####### VIDEOS #######

  // get video list example
  const getVideosList = await visaoLibertaria.videoList(1, 0);
  console.log(getVideosList);

  // get video list by category example
  const getVideosCategory = await visaoLibertaria.videoCategory("news", 1, 0);
  console.log(getVideosCategory);

  // get video search list
  const getVideosSearch = await visaoLibertaria.videoSearch("news", 1, 0);
  console.log(getVideosSearch);

  // ###### ARTICLES #######

  // get article list example
  const getArticlesList = await visaoLibertaria.articleList(1, 0);
  console.log(getArticlesList);

  // get article list by category example
  const getArticlesCategory = await visaoLibertaria.articleCategory(
    "news",
    1,
    0
  );
  console.log(getArticlesCategory);

  // // get article search list
  const getArticlesSearch = await visaoLibertaria.articleSearch("news", 1, 0);
  console.log(getArticlesSearch);

  // ###### TARGETS ########

  // get all article list example
  const getTargetsAll = await visaoLibertaria.targetAll(1, 0);
  console.log(getTargetsAll);

  // get article list example
  const getTargetsList = await visaoLibertaria.targetList(1, 0);
  console.log(getTargetsList);

  // get article list by category example
  const getTargetsCategory = await visaoLibertaria.targetCategory("news", 1, 0);
  console.log(getTargetsCategory);

  // get article search list
  const getTargetsSearch = await visaoLibertaria.targetSearch("news", 1, 0);
  console.log(getTargetsSearch);
}
init();
