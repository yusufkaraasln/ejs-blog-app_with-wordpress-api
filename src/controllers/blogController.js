const { default: axios } = require("axios");

const getAllDocument = async (req, res) => {
  let pagination = "";
  let active = 1;
  if (req.query.page) {
    pagination = `page=${req.query.page}`;
    active = req.query.page;
  }

  try {
    const api = await axios.get(
      "https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20&" + pagination
    );
    res
      .status(200)
      .render("./docs/index", {
        data: api.data,
        pagination: api.headers["x-wp-totalpages"],
        active,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneDocument = async (req, res) => {
  try {
    const api = await axios.get(
      `https://emrealtunbilek.com/wp-json/wp/v2/posts/${req.params.id}`
    );
    res.status(200).render("./docs/document", { data: api.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchDocument = async (req, res) => {

  let pagination = "";
  let active = 1;
  if (req.query.page) {
    pagination = `page=${req.query.page}`;
    active = req.query.page;
  }


  try {
    const api = await axios.get(
      `https://emrealtunbilek.com/wp-json/wp/v2/posts?search=${req.body.search}`
    );
    res.status(200).render("./docs/index", { data: api.data, pagination, active });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDocument,
  getOneDocument,
  searchDocument,
};
