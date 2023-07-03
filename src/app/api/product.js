import axios from "axios";
import config from "../../config/config";

export const listProduct = async (params) => {
  const product = await axios.get(`${config.baseUrl}/${config.product}`, params);
  return product;
};

export const detailProduct = async (id) => {
  const product = await axios.get(`${config.baseUrl}/${config.product}/${id}`);
  return product;
};

export const addProduct = async ({ getData, headers }) => {
  const product = await axios.post(`${config.baseUrl}/${config.product}`, getData, headers);
  return product;
};

export const editProduct = async ({ id, getData, headers }) => {
  console.log(getData);
  console.log(id);
  const product = await axios.put(`${config.baseUrl}/${config.product}/${id}`, getData, headers);
  return product;
};

export const deleteProduct = async (id) => {
  const product = await axios.delete(`${config.baseUrl}/${config.product}/${id}`);
  return product;
};
