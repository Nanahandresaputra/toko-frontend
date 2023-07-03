import axios from "axios";
import config from "../../config/config";

export const listCategory = async () => {
  const category = await axios.get(`${config.baseUrl}/${config.category}`);
  localStorage.setItem("listCategory", JSON.stringify(category.data));
  return category;
};

export const detailCategory = async (id) => {
  const category = await axios.get(`${config.baseUrl}/${config.category}/${id}`);
  return category;
};
