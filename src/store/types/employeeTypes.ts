import { Action } from "redux";
import IEmployee from "../../models/IEmployee";
import { FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAILURE, UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILURE, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILURE } from "../constants";



export interface EmployeeState {
    employees: IEmployee[];
    employee: IEmployee;
    loading: boolean;
    error: string | null;
  }
  
  interface FetchEmployeesRequestAction extends Action {
    type: typeof FETCH_EMPLOYEES_REQUEST;
  }
  
  interface FetchEmployeesSuccessAction extends Action {
    type: typeof FETCH_EMPLOYEES_SUCCESS;
    payload: IEmployee[];
  }
  
  interface FetchEmployeesFailureAction extends Action {
    type: typeof FETCH_EMPLOYEES_FAILURE;
    payload: string;
  }
  interface FetchEmployeeRequestAction extends Action {
    type: typeof FETCH_EMPLOYEE_REQUEST;
  }
  
  interface FetchEmployeeSuccessAction extends Action {
    type: typeof FETCH_EMPLOYEE_SUCCESS;
    payload: IEmployee;
  }
  
  interface FetchEmployeeFailureAction extends Action {
    type: typeof FETCH_EMPLOYEE_FAILURE;
    payload: string;
  }
  
  interface AddEmployeeRequestAction extends Action {
    type: typeof ADD_EMPLOYEE_REQUEST;
  }
  
  interface AddEmployeeSuccessAction extends Action {
    type: typeof ADD_EMPLOYEE_SUCCESS;
    payload: IEmployee;
  }
  
  interface AddEmployeeFailureAction extends Action {
    type: typeof ADD_EMPLOYEE_FAILURE;
    payload: string;
  }
  
  interface UpdateEmployeeRequestAction extends Action {
    type: typeof UPDATE_EMPLOYEE_REQUEST;
  }
  
  interface UpdateEmployeeSuccessAction extends Action {
    type: typeof UPDATE_EMPLOYEE_SUCCESS;
    payload: {
      id: string, employee: IEmployee;
    }
  }
  
  interface UpdateEmployeeFailureAction extends Action {
    type: typeof UPDATE_EMPLOYEE_FAILURE;
    payload: string;
  }
  
  interface DeleteEmployeeRequestAction extends Action {
    type: typeof DELETE_EMPLOYEE_REQUEST;
  }
  
  interface DeleteEmployeeSuccessAction extends Action {
    type: typeof DELETE_EMPLOYEE_SUCCESS;
    payload: string;
  }
  
  interface DeleteEmployeeFailureAction extends Action {
    type: typeof DELETE_EMPLOYEE_FAILURE;
    payload: string;
  }
  
  export type EmployeeActionTypes =
    | FetchEmployeesRequestAction
    | FetchEmployeesSuccessAction
    | FetchEmployeesFailureAction
    | FetchEmployeeRequestAction
    | FetchEmployeeSuccessAction
    | FetchEmployeeFailureAction
    | AddEmployeeRequestAction
    | AddEmployeeSuccessAction
    | AddEmployeeFailureAction
    | UpdateEmployeeRequestAction
    | UpdateEmployeeSuccessAction
    | UpdateEmployeeFailureAction
    | DeleteEmployeeRequestAction
    | DeleteEmployeeSuccessAction
    | DeleteEmployeeFailureAction;
