import { Dispatch } from 'redux';
import IRepair from '../../../models/IRepair';
import * as services from '../../../services/RepairService';
import { FETCH_REPAIRS_REQUEST, FETCH_REPAIRS_SUCCESS, FETCH_REPAIRS_FAILURE, FETCH_REPAIR_REQUEST, FETCH_REPAIR_SUCCESS, FETCH_REPAIR_FAILURE, ADD_REPAIR_REQUEST, ADD_REPAIR_SUCCESS, ADD_REPAIR_FAILURE, UPDATE_REPAIR_REQUEST, UPDATE_REPAIR_SUCCESS, UPDATE_REPAIR_FAILURE, DELETE_REPAIR_REQUEST, DELETE_REPAIR_SUCCESS, DELETE_REPAIR_FAILURE } from '../../constants';
import { AppThunk } from '../../types';
import { RepairActionTypes } from '../../types/repairTypes';

  // export const fetchRepairs = (): AppThunk => async(dispatch: Dispatch<RepairActionTypes>) => {
  //   dispatch({type: FETCH_REPAIRS_REQUEST});
  //   try {
  //     const repairs: IRepair[] = await services.getRepairs();
  //     dispatch({
  //       type: FETCH_REPAIRS_SUCCESS,
  //       payload: repairs,
  //     });
  //   } catch (error) {
  //     //@ts-ignore
  //     const errorMsg = error.message;
  //     dispatch({type: FETCH_REPAIRS_FAILURE, payload: errorMsg});
  //   }
  // }
// 
  // export const fetchRepair = (id: string): AppThunk => async(dispatch: Dispatch<RepairActionTypes>) => {
  //   dispatch({type: FETCH_REPAIR_REQUEST});
  //   try {
  //     const repair: IRepair = await services.getRepair(id);
  //     dispatch({
  //       type: FETCH_REPAIR_SUCCESS,
  //       payload: repair,
  //     });
  //   } catch (error) {
  //     //@ts-ignore
  //     const errorMsg = error.message;
  //     dispatch({type: FETCH_REPAIR_FAILURE, payload: errorMsg});
  //   }
  // }

  export const addRepair = (repair: IRepair): AppThunk => async(dispatch: Dispatch<RepairActionTypes>) => {
    dispatch({type: ADD_REPAIR_REQUEST});
    try {
      const newRepair: IRepair = await services.addRepair(repair);
      dispatch({
        type: ADD_REPAIR_SUCCESS,
        payload: newRepair,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: ADD_REPAIR_FAILURE, payload: errorMsg});
    }
  }
  
  export const updateRepair = (id: string, repair: IRepair): AppThunk => async(dispatch: Dispatch<RepairActionTypes>) => {
    dispatch({type: UPDATE_REPAIR_REQUEST});
    try {
      const updatedRepair: IRepair = await services.updateRepair(id, repair);
      dispatch({
        type: UPDATE_REPAIR_SUCCESS,
        payload: {
          id, repair
        }
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: UPDATE_REPAIR_FAILURE, payload: errorMsg});
    }
  }
  
  export const deleteRepair = (id: string): AppThunk => async(dispatch: Dispatch<RepairActionTypes>) => {
    dispatch({type: DELETE_REPAIR_REQUEST});
    try {
      await services.deleteRepair(id);
      dispatch({
        type: DELETE_REPAIR_SUCCESS,
        payload: id,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: DELETE_REPAIR_FAILURE, payload: errorMsg});
    }
  }
