import { Dispatch } from 'redux';
import IProduct from '../../../models/IProduct';
import * as services from '../../../services/ProductService';
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from '../../constants';
import { AppThunk } from '../../types';
import { ProductActionTypes } from '../../types/productTypes';

  export const fetchProducts = (): AppThunk => async(dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({type: FETCH_PRODUCTS_REQUEST});
    try {
      const products: IProduct[] = await services.getProducts();
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: FETCH_PRODUCTS_FAILURE, payload: errorMsg});
    }
  }

  export const fetchProduct = (id: string): AppThunk => async(dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({type: FETCH_PRODUCT_REQUEST});
    try {
      const product: IProduct = await services.getProduct(id);
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: product,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: FETCH_PRODUCT_FAILURE, payload: errorMsg});
    }
  }

  export const addProduct = (product: IProduct): AppThunk => async(dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({type: ADD_PRODUCT_REQUEST});
    try {
      const newProduct: IProduct = await services.addProduct(product);
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: newProduct,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: ADD_PRODUCT_FAILURE, payload: errorMsg});
    }
  }
  
  export const updateProduct = (id: string, product: IProduct): AppThunk => async(dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({type: UPDATE_PRODUCT_REQUEST});
    try {
      const updatedProduct: IProduct = await services.updateProduct(id, product);
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: {
          id, product
        }
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: UPDATE_PRODUCT_FAILURE, payload: errorMsg});
    }
  }
  
  export const deleteProduct = (id: string): AppThunk => async(dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({type: DELETE_PRODUCT_REQUEST});
    try {
      await services.deleteProduct(id);
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: id,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: DELETE_PRODUCT_FAILURE, payload: errorMsg});
    }
  }
