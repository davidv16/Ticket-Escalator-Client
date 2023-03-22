import { Dispatch } from 'redux';
import IEmployee from '../../../models/IEmployee';
import * as services from '../../../services/EmployeeService';
import { FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAILURE, UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILURE, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILURE } from '../../constants';
import { AppThunk } from '../../types';
import { EmployeeActionTypes } from '../../types/employeeTypes';

  export const fetchEmployees = (): AppThunk => async(dispatch: Dispatch<EmployeeActionTypes>) => {
    dispatch({type: FETCH_EMPLOYEES_REQUEST});
    try {
      const employees: IEmployee[] = await services.getEmployees();
      dispatch({
        type: FETCH_EMPLOYEES_SUCCESS,
        payload: employees,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: FETCH_EMPLOYEES_FAILURE, payload: errorMsg});
    }
  }

  export const fetchEmployee = (id: string): AppThunk => async(dispatch: Dispatch<EmployeeActionTypes>) => {
    dispatch({type: FETCH_EMPLOYEE_REQUEST});
    try {
      const employee: IEmployee = await services.getEmployee(id);
      dispatch({
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: employee,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: FETCH_EMPLOYEE_FAILURE, payload: errorMsg});
    }
  }

  export const addEmployee = (employee: IEmployee): AppThunk => async(dispatch: Dispatch<EmployeeActionTypes>) => {
    dispatch({type: ADD_EMPLOYEE_REQUEST});
    try {
      const newEmployee: IEmployee = await services.addEmployee(employee);
      dispatch({
        type: ADD_EMPLOYEE_SUCCESS,
        payload: newEmployee,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: ADD_EMPLOYEE_FAILURE, payload: errorMsg});
    }
  }
  
  export const updateEmployee = (id: string, employee: IEmployee): AppThunk => async(dispatch: Dispatch<EmployeeActionTypes>) => {
    dispatch({type: UPDATE_EMPLOYEE_REQUEST});
    try {
      const updatedEmployee: IEmployee = await services.updateEmployee(id, employee);
      dispatch({
        type: UPDATE_EMPLOYEE_SUCCESS,
        payload: {
          id, employee
        }
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: UPDATE_EMPLOYEE_FAILURE, payload: errorMsg});
    }
  }
  
  export const deleteEmployee = (id: string): AppThunk => async(dispatch: Dispatch<EmployeeActionTypes>) => {
    dispatch({type: DELETE_EMPLOYEE_REQUEST});
    try {
      await services.deleteEmployee(id);
      dispatch({
        type: DELETE_EMPLOYEE_SUCCESS,
        payload: id,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: DELETE_EMPLOYEE_FAILURE, payload: errorMsg});
    }
  }
