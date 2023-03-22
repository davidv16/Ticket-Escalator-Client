import { Action } from "redux";
import IProduct from "../../models/IProduct";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from "../constants";



export interface ProductState {
    products: IProduct[];
    product: IProduct;
    loading: boolean;
    error: string | null;
  }
  
  interface FetchProductsRequestAction extends Action {
    type: typeof FETCH_PRODUCTS_REQUEST;
  }
  
  interface FetchProductsSuccessAction extends Action {
    type: typeof FETCH_PRODUCTS_SUCCESS;
    payload: IProduct[];
  }
  
  interface FetchProductsFailureAction extends Action {
    type: typeof FETCH_PRODUCTS_FAILURE;
    payload: string;
  }
  interface FetchProductRequestAction extends Action {
    type: typeof FETCH_PRODUCT_REQUEST;
  }
  
  interface FetchProductSuccessAction extends Action {
    type: typeof FETCH_PRODUCT_SUCCESS;
    payload: IProduct;
  }
  
  interface FetchProductFailureAction extends Action {
    type: typeof FETCH_PRODUCT_FAILURE;
    payload: string;
  }
  
  interface AddProductRequestAction extends Action {
    type: typeof ADD_PRODUCT_REQUEST;
  }
  
  interface AddProductSuccessAction extends Action {
    type: typeof ADD_PRODUCT_SUCCESS;
    payload: IProduct;
  }
  
  interface AddProductFailureAction extends Action {
    type: typeof ADD_PRODUCT_FAILURE;
    payload: string;
  }
  
  interface UpdateProductRequestAction extends Action {
    type: typeof UPDATE_PRODUCT_REQUEST;
  }
  
  interface UpdateProductSuccessAction extends Action {
    type: typeof UPDATE_PRODUCT_SUCCESS;
    payload: {
      id: string, product: IProduct;
    }
  }
  
  interface UpdateProductFailureAction extends Action {
    type: typeof UPDATE_PRODUCT_FAILURE;
    payload: string;
  }
  
  interface DeleteProductRequestAction extends Action {
    type: typeof DELETE_PRODUCT_REQUEST;
  }
  
  interface DeleteProductSuccessAction extends Action {
    type: typeof DELETE_PRODUCT_SUCCESS;
    payload: string;
  }
  
  interface DeleteProductFailureAction extends Action {
    type: typeof DELETE_PRODUCT_FAILURE;
    payload: string;
  }
  
  export type ProductActionTypes =
    | FetchProductsRequestAction
    | FetchProductsSuccessAction
    | FetchProductsFailureAction
    | FetchProductRequestAction
    | FetchProductSuccessAction
    | FetchProductFailureAction
    | AddProductRequestAction
    | AddProductSuccessAction
    | AddProductFailureAction
    | UpdateProductRequestAction
    | UpdateProductSuccessAction
    | UpdateProductFailureAction
    | DeleteProductRequestAction
    | DeleteProductSuccessAction
    | DeleteProductFailureAction;
