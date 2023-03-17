import { Action } from "redux";
import ICustomer from "../../models/ICustomer";
import { FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMER_REQUEST, FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE, ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAILURE, UPDATE_CUSTOMER_REQUEST, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE, DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE } from "../constants";



export interface CustomerState {
    customers: ICustomer[];
    customer: ICustomer;
    loading: boolean;
    error: string | null;
  }
  
  interface FetchCustomersRequestAction extends Action {
    type: typeof FETCH_CUSTOMERS_REQUEST;
  }
  
  interface FetchCustomersSuccessAction extends Action {
    type: typeof FETCH_CUSTOMERS_SUCCESS;
    payload: ICustomer[];
  }
  
  interface FetchCustomersFailureAction extends Action {
    type: typeof FETCH_CUSTOMERS_FAILURE;
    payload: string;
  }
  interface FetchCustomerRequestAction extends Action {
    type: typeof FETCH_CUSTOMER_REQUEST;
  }
  
  interface FetchCustomerSuccessAction extends Action {
    type: typeof FETCH_CUSTOMER_SUCCESS;
    payload: ICustomer;
  }
  
  interface FetchCustomerFailureAction extends Action {
    type: typeof FETCH_CUSTOMER_FAILURE;
    payload: string;
  }
  
  interface AddCustomerRequestAction extends Action {
    type: typeof ADD_CUSTOMER_REQUEST;
  }
  
  interface AddCustomerSuccessAction extends Action {
    type: typeof ADD_CUSTOMER_SUCCESS;
    payload: ICustomer;
  }
  
  interface AddCustomerFailureAction extends Action {
    type: typeof ADD_CUSTOMER_FAILURE;
    payload: string;
  }
  
  interface UpdateCustomerRequestAction extends Action {
    type: typeof UPDATE_CUSTOMER_REQUEST;
  }
  
  interface UpdateCustomerSuccessAction extends Action {
    type: typeof UPDATE_CUSTOMER_SUCCESS;
    payload: {
      id: string, customer: ICustomer;
    }
  }
  
  interface UpdateCustomerFailureAction extends Action {
    type: typeof UPDATE_CUSTOMER_FAILURE;
    payload: string;
  }
  
  interface DeleteCustomerRequestAction extends Action {
    type: typeof DELETE_CUSTOMER_REQUEST;
  }
  
  interface DeleteCustomerSuccessAction extends Action {
    type: typeof DELETE_CUSTOMER_SUCCESS;
    payload: string;
  }
  
  interface DeleteCustomerFailureAction extends Action {
    type: typeof DELETE_CUSTOMER_FAILURE;
    payload: string;
  }
  
  export type CustomerActionTypes =
    | FetchCustomersRequestAction
    | FetchCustomersSuccessAction
    | FetchCustomersFailureAction
    | FetchCustomerRequestAction
    | FetchCustomerSuccessAction
    | FetchCustomerFailureAction
    | AddCustomerRequestAction
    | AddCustomerSuccessAction
    | AddCustomerFailureAction
    | UpdateCustomerRequestAction
    | UpdateCustomerSuccessAction
    | UpdateCustomerFailureAction
    | DeleteCustomerRequestAction
    | DeleteCustomerSuccessAction
    | DeleteCustomerFailureAction;
