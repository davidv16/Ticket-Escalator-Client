import ICustomer from "../../models/ICustomer";
import { ADD_CUSTOMER_FAILURE, ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE, DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMER_FAILURE, FETCH_CUSTOMER_REQUEST, FETCH_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE, UPDATE_CUSTOMER_REQUEST, UPDATE_CUSTOMER_SUCCESS } from "../constants";
import { CustomerActionTypes, CustomerState } from "../types/customerTypes";


const initialState: CustomerState = {
  customers: [],
  customer: {
    id: "",
    name: "",
    ssn: "",
    address: "",
  },
  loading: false,
  error: null
};
const customerReducer = ( state: CustomerState = initialState, action: CustomerActionTypes): CustomerState => {
  switch(action.type) {
    case FETCH_CUSTOMERS_REQUEST:
    case FETCH_CUSTOMER_REQUEST:
    case ADD_CUSTOMER_REQUEST:
    case UPDATE_CUSTOMER_REQUEST:
    case DELETE_CUSTOMER_REQUEST:
      return{
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.payload,
        loading: false,
        error: null,
      };
    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: [...state.customers, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.map((customer: ICustomer) =>
          customer.id === action.payload.customer.id ? action.payload.customer : customer
          ),
        loading: false,
        error: null,
      };
    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.filter((customer: ICustomer) => customer.id !== action.payload),
        loading: false,
        error: null
      };
    case FETCH_CUSTOMERS_FAILURE:
    case FETCH_CUSTOMER_FAILURE:
    case ADD_CUSTOMER_FAILURE:
    case UPDATE_CUSTOMER_FAILURE:
    case DELETE_CUSTOMER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default customerReducer;