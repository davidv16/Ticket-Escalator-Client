import { Dispatch } from 'redux';
import ISparepart from '../../../models/ISparepart';
import * as services from '../../../services/SparepartService';
import { FETCH_SPAREPARTS_REQUEST, FETCH_SPAREPARTS_SUCCESS, FETCH_SPAREPARTS_FAILURE, FETCH_SPAREPART_REQUEST, FETCH_SPAREPART_SUCCESS, FETCH_SPAREPART_FAILURE, ADD_SPAREPART_REQUEST, ADD_SPAREPART_SUCCESS, ADD_SPAREPART_FAILURE, UPDATE_SPAREPART_REQUEST, UPDATE_SPAREPART_SUCCESS, UPDATE_SPAREPART_FAILURE, DELETE_SPAREPART_REQUEST, DELETE_SPAREPART_SUCCESS, DELETE_SPAREPART_FAILURE } from '../../constants';
import { AppThunk } from '../../types';
import { SparepartActionTypes } from '../../types/sparepartTypes';

  // export const fetchSpareparts = (): AppThunk => async(dispatch: Dispatch<SparepartActionTypes>) => {
  //   dispatch({type: FETCH_SPAREPARTS_REQUEST});
  //   try {
  //     const spareparts: ISparepart[] = await services.getSpareparts();
  //     dispatch({
  //       type: FETCH_SPAREPARTS_SUCCESS,
  //       payload: spareparts,
  //     });
  //   } catch (error) {
  //     //@ts-ignore
  //     const errorMsg = error.message;
  //     dispatch({type: FETCH_SPAREPARTS_FAILURE, payload: errorMsg});
  //   }
  // }
// 
  // export const fetchSparepart = (id: string): AppThunk => async(dispatch: Dispatch<SparepartActionTypes>) => {
  //   dispatch({type: FETCH_SPAREPART_REQUEST});
  //   try {
  //     const sparepart: ISparepart = await services.getSparepart(id);
  //     dispatch({
  //       type: FETCH_SPAREPART_SUCCESS,
  //       payload: sparepart,
  //     });
  //   } catch (error) {
  //     //@ts-ignore
  //     const errorMsg = error.message;
  //     dispatch({type: FETCH_SPAREPART_FAILURE, payload: errorMsg});
  //   }
  // }

  export const addSparepart = (sparepart: ISparepart): AppThunk => async(dispatch: Dispatch<SparepartActionTypes>) => {
    dispatch({type: ADD_SPAREPART_REQUEST});
    try {
      const newSparepart: ISparepart = await services.addSparepart(sparepart);
      dispatch({
        type: ADD_SPAREPART_SUCCESS,
        payload: newSparepart,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: ADD_SPAREPART_FAILURE, payload: errorMsg});
    }
  }
  
  export const updateSparepart = (id: string, sparepart: ISparepart): AppThunk => async(dispatch: Dispatch<SparepartActionTypes>) => {
    dispatch({type: UPDATE_SPAREPART_REQUEST});
    try {
      const updatedSparepart: ISparepart = await services.updateSparepart(id, sparepart);
      dispatch({
        type: UPDATE_SPAREPART_SUCCESS,
        payload: {
          id, sparepart
        }
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: UPDATE_SPAREPART_FAILURE, payload: errorMsg});
    }
  }
  
  export const deleteSparepart = (id: string): AppThunk => async(dispatch: Dispatch<SparepartActionTypes>) => {
    dispatch({type: DELETE_SPAREPART_REQUEST});
    try {
      await services.deleteSparepart(id);
      dispatch({
        type: DELETE_SPAREPART_SUCCESS,
        payload: id,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: DELETE_SPAREPART_FAILURE, payload: errorMsg});
    }
  }
