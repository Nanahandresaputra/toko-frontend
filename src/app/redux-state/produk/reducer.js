import { DETAIL_PRODUCT, GET_PARAMS, LIST_PRODUCT, PRODUCT_ID, START_FETCHING } from "./constant";

let initialState = {
  listProduct: [],
  detail: {},
  status: "process",
  categoryParams: "",
  productId: localStorage.getItem("productId") || "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING: {
      return { ...state, status: action.payload };
    }
    case LIST_PRODUCT: {
      return { ...state, listProduct: action.payload };
    }
    case DETAIL_PRODUCT: {
      return { ...state, detail: action.payload };
    }
    case GET_PARAMS: {
      return { ...state, categoryParams: action.payload };
    }
    case PRODUCT_ID: {
      return { ...state, productId: action.payload };
    }

    default:
      return state;
  }
};

export default productReducer;
