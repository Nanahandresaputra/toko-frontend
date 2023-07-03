import { addProduct, deleteProduct, detailProduct, editProduct, listProduct } from "../../api/product";
import { DELETE_PRODUCT, DETAIL_PRODUCT, EDIT_PRODUCT, GET_PARAMS, LIST_PRODUCT, PRODUCT_ID, START_FETCHING } from "./constant";

export const startFetching = (payload) => {
  return {
    type: START_FETCHING,
    payload: payload,
  };
};

export const getListProduct = () => {
  return (dispatch, getValue) => {
    let getParams = getValue().product.categoryParams;
    let params = {
      category: getParams,
    };
    dispatch(startFetching("process"));
    listProduct({ params }).then((res) =>
      dispatch({
        type: LIST_PRODUCT,
        payload: res.data.product,
      })
    );
    dispatch(startFetching("success"));
  };
};

export const getDetailProduct = (id) => {
  return (dispatch) => {
    detailProduct(id).then((res) =>
      dispatch({
        type: DETAIL_PRODUCT,
        payload: res.data,
      })
    );
  };
};

export const addProductAction = ({ data, deskripsi }) => {
  return (dispatch) => {
    let getData = new FormData();
    getData.append("name", data.nama);
    getData.append("price", data.harga);
    getData.append("category", data.kategori);
    getData.append("image", data.gambar[0]);
    getData.append("description", deskripsi);

    let headers = { "Content-Type": "multipart/form-data" };
    dispatch(startFetching("process"));
    addProduct({ getData, headers }).then((res) =>
      dispatch({
        type: DETAIL_PRODUCT,
        payload: res.data,
      })
    );
    dispatch(startFetching("success"));
  };
};

export const editProductAction = ({ data, deskripsi }) => {
  return (dispatch, getValue) => {
    let id = getValue().product.productId;

    let getData = new FormData();
    getData.append("name", data.nama);
    getData.append("price", data.harga);
    getData.append("category", data.kategori);
    getData.append("image", data.gambar[0]);
    getData.append("description", deskripsi);

    let headers = { "Content-Type": "multipart/form-data" };
    dispatch(startFetching("process"));
    editProduct({ id, getData, headers }).then((res) =>
      dispatch({
        type: EDIT_PRODUCT,
        payload: res.data,
      })
    );
    dispatch(startFetching("success"));
  };
};

export const deleteProductAction = (id) => {
  return (dispatch) => {
    deleteProduct(id).then((res) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: res.data,
      });
    });
  };
};

export const getParamsCategory = (params) => {
  return {
    type: GET_PARAMS,
    payload: params,
  };
};

export const getProductId = (id) => {
  return {
    type: PRODUCT_ID,
    payload: id,
  };
};
