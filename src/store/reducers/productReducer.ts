import IProduct from "../../models/IProduct";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCT_REQUEST, ADD_PRODUCT_REQUEST, UPDATE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCT_FAILURE, ADD_PRODUCT_FAILURE, UPDATE_PRODUCT_FAILURE, DELETE_PRODUCT_FAILURE } from "../constants";
import { ProductState, ProductActionTypes } from "../types/productTypes";

const initialState: ProductState = {
  products: [],
  product: {
    id: "",
    name: "",
    vendor: "",
    serialNumber: "",
    usageCounter: 0
  },
  loading: false,
  error: null
};
const productReducer = ( state: ProductState = initialState, action: ProductActionTypes): ProductState => {
  switch(action.type) {
    case FETCH_PRODUCTS_REQUEST:
    case FETCH_PRODUCT_REQUEST:
    case ADD_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return{
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((product: IProduct) =>
          product.id === action.payload.product.id ? action.payload.product : product
          ),
        loading: false,
        error: null,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((product: IProduct) => product.id !== action.payload),
        loading: false,
        error: null
      };
    case FETCH_PRODUCTS_FAILURE:
    case FETCH_PRODUCT_FAILURE:
    case ADD_PRODUCT_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default productReducer;