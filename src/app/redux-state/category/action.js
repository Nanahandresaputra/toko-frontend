import { detailCategory, listCategory } from "../../api/category";
import { CATEGORY_ID, DETAIL_CATEGORY, LIST_CATEGORY } from "./constant";

export const getListCategory = () => {
  return (dispatch) => {
    listCategory().then((res) =>
      dispatch({
        type: LIST_CATEGORY,
        payload: res.data,
      })
    );
  };
};

export const getDetailCategory = () => {
  return (dispatch, getValue) => {
    let id = getValue().category.categoryId;
    detailCategory(id).then((res) =>
      dispatch({
        type: DETAIL_CATEGORY,
        payload: res.data,
      })
    );
  };
};

export const getCategoryId = (id) => {
  return {
    type: CATEGORY_ID,
    payload: id,
  };
};
