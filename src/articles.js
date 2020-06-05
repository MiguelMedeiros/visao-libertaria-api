const axios = require("axios");

const getList = async (max, ini, sts) => {
  try {
    if (!Number.isInteger(ini)) {
      ini = 0;
    }
    if (!Number.isInteger(max)) {
      max = 10;
    }
    if (!Number.isInteger(sts)) {
      sts = 0;
    }
    return await axios
      .get(
        `https://www.visaolibertaria.com/api/Article/List?ini=${ini}&max=${max}&sts=${sts}`
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const getCategory = async (theory, max, ini) => {
  try {
    if (!theory) {
      theory = "News";
    }
    if (!Number.isInteger(ini)) {
      ini = 0;
    }
    if (!Number.isInteger(max)) {
      max = 10;
    }
    return await axios
      .get(
        `https://www.visaolibertaria.com/api/Article/ByCategory?categ=${theory}&ini=${ini}&max=${max}`
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const getSearch = async (search, max, ini) => {
  try {
    if (!search) {
      search = "";
    }
    if (!Number.isInteger(ini)) {
      ini = 0;
    }
    if (!Number.isInteger(max)) {
      max = 10;
    }
    return await axios
      .post(
        `https://www.visaolibertaria.com/api/Article/Search?ini=${ini}&max=${max}`,
        {
          SearchString: search,
        }
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getList,
  getCategory,
  getSearch,
};
