import IEmployee from "../../models/IEmployee";
import { ADD_EMPLOYEE_FAILURE, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILURE, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILURE, UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS } from "../constants";
import { EmployeeActionTypes, EmployeeState } from "../types/employeeTypes";


const initialState: EmployeeState = {
  employees: [],
  employee: {
    id: "",
    name: "",
    email: "",
  },
  loading: false,
  error: null
};
const employeeReducer = ( state: EmployeeState = initialState, action: EmployeeActionTypes): EmployeeState => {
  switch(action.type) {
    case FETCH_EMPLOYEES_REQUEST:
    case FETCH_EMPLOYEE_REQUEST:
    case ADD_EMPLOYEE_REQUEST:
    case UPDATE_EMPLOYEE_REQUEST:
    case DELETE_EMPLOYEE_REQUEST:
      return{
        ...state,
        loading: true,
        error: null
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employee: action.payload,
        loading: false,
        error: null,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: state.employees.map((employee: IEmployee) =>
          employee.id === action.payload.employee.id ? action.payload.employee : employee
          ),
        loading: false,
        error: null,
      };
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: state.employees.filter((employee: IEmployee) => employee.id !== action.payload),
        loading: false,
        error: null
      };
    case FETCH_EMPLOYEES_FAILURE:
    case FETCH_EMPLOYEE_FAILURE:
    case ADD_EMPLOYEE_FAILURE:
    case UPDATE_EMPLOYEE_FAILURE:
    case DELETE_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default employeeReducer;