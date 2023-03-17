import { Dispatch } from 'redux';
import ICustomer from '../../../models/ICustomer';
import * as services from '../../../services/CustomerService';
import { FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMER_REQUEST, FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE, ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAILURE, UPDATE_CUSTOMER_REQUEST, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE, DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE } from '../../constants';
import { AppThunk } from '../../types';
import { CustomerActionTypes } from '../../types/customerTypes';

  export const fetchCustomers = (): AppThunk => async(dispatch: Dispatch<CustomerActionTypes>) => {
    dispatch({type: FETCH_CUSTOMERS_REQUEST});
    try {
      const customers: ICustomer[] = await services.getCustomers();
      dispatch({
        type: FETCH_CUSTOMERS_SUCCESS,
        payload: customers,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: FETCH_CUSTOMERS_FAILURE, payload: errorMsg});
    }
  }

  export const fetchCustomer = (id: string): AppThunk => async(dispatch: Dispatch<CustomerActionTypes>) => {
    dispatch({type: FETCH_CUSTOMER_REQUEST});
    try {
      const customer: ICustomer = await services.getCustomer(id);
      dispatch({
        type: FETCH_CUSTOMER_SUCCESS,
        payload: customer,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: FETCH_CUSTOMER_FAILURE, payload: errorMsg});
    }
  }

  export const addCustomer = (customer: ICustomer): AppThunk => async(dispatch: Dispatch<CustomerActionTypes>) => {
    dispatch({type: ADD_CUSTOMER_REQUEST});
    try {
      const newCustomer: ICustomer = await services.addCustomer(customer);
      dispatch({
        type: ADD_CUSTOMER_SUCCESS,
        payload: newCustomer,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: ADD_CUSTOMER_FAILURE, payload: errorMsg});
    }
  }
  
  export const updateCustomer = (id: string, customer: ICustomer): AppThunk => async(dispatch: Dispatch<CustomerActionTypes>) => {
    dispatch({type: UPDATE_CUSTOMER_REQUEST});
    try {
      const updatedCustomer: ICustomer = await services.updateCustomer(id, customer);
      dispatch({
        type: UPDATE_CUSTOMER_SUCCESS,
        payload: {
          id, customer
        }
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: UPDATE_CUSTOMER_FAILURE, payload: errorMsg});
    }
  }
  
  export const deleteCustomer = (id: string): AppThunk => async(dispatch: Dispatch<CustomerActionTypes>) => {
    dispatch({type: DELETE_CUSTOMER_REQUEST});
    try {
      await services.deleteCustomer(id);
      dispatch({
        type: DELETE_CUSTOMER_SUCCESS,
        payload: id,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: DELETE_CUSTOMER_FAILURE, payload: errorMsg});
    }
  }
