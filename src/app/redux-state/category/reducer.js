import { CATEGORY_ID, DETAIL_CATEGORY, LIST_CATEGORY } from "./constant";

let initialState = {
  listCategory: JSON.parse(localStorage.getItem("listCategory")) || [],
  detailCategory: {},
  categoryId: "",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_CATEGORY: {
      return { ...state, listCategory: action.payload };
    }
    case DETAIL_CATEGORY: {
      return { ...state, detailCategory: action.payload };
    }
    case CATEGORY_ID: {
      return { ...state, categoryId: action.payload };
    }

    default:
      return state;
  }
};

export default categoryReducer;
