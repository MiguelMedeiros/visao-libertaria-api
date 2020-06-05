const axios = require("axios");

const getAll = async (max, ini, proxy) => {
  try {
    if (!Number.isInteger(ini)) {
      ini = 0;
    }
    if (!Number.isInteger(max)) {
      max = 10;
    }
    if (!proxy) {
      proxy = "";
    }
    return await axios
      .get(
        `${proxy}https://www.visaolibertaria.com/api/Target/ListAll?ini=${ini}&max=${max}`
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const getList = async (max, ini, proxy) => {
  try {
    if (!Number.isInteger(ini)) {
      ini = 0;
    }
    if (!Number.isInteger(max)) {
      max = 10;
    }
    if (!proxy) {
      proxy = "";
    }
    return await axios
      .get(
        `${proxy}https://www.visaolibertaria.com/api/Target/List?ini=${ini}&max=${max}`
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const getCategory = async (theory, max, ini, proxy) => {
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
    if (!proxy) {
      proxy = "";
    }
    return await axios
      .get(
        `${proxy}https://www.visaolibertaria.com/api/Target/ByCategory?categ=${theory}&ini=${ini}&max=${max}`
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const getSearch = async (search, max, ini, proxy) => {
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
    if (!proxy) {
      proxy = "";
    }
    return await axios
      .post(
        `${proxy}https://www.visaolibertaria.com/api/Target/Search?ini=${ini}&max=${max}`,
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
