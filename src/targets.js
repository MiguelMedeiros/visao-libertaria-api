const axios = require("axios");

const getAll = async (max, ini) => {
  try {
    if (!Number.isInteger(ini)) {
      ini = 0;
    }
    if (!Number.isInteger(max)) {
      max = 10;
    }
    return await axios
      .get(
        `https://www.visaolibertaria.com/api/Target/ListAll?ini=${ini}&max=${max}`
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const getList = async (max, ini) => {
  try {
    if (!Number.isInteger(ini)) {
      ini = 0;
    }
    if (!Number.isInteger(max)) {
      max = 10;
    }
    return await axios
      .get(
        `https://www.visaolibertaria.com/api/Target/List?ini=${ini}&max=${max}`
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
        `https://www.visaolibertaria.com/api/Target/ByCategory?categ=${theory}&ini=${ini}&max=${max}`
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
        `https://www.visaolibertaria.com/api/Target/Search?ini=${ini}&max=${max}`,
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
  getAll,
  getList,
  getCategory,
  getSearch,
};
