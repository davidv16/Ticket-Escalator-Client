import { Action } from "redux";
import ISparepart from "../../models/ISparepart";
import { FETCH_SPAREPARTS_REQUEST, FETCH_SPAREPARTS_SUCCESS, FETCH_SPAREPARTS_FAILURE, FETCH_SPAREPART_REQUEST, FETCH_SPAREPART_SUCCESS, FETCH_SPAREPART_FAILURE, ADD_SPAREPART_REQUEST, ADD_SPAREPART_SUCCESS, ADD_SPAREPART_FAILURE, UPDATE_SPAREPART_REQUEST, UPDATE_SPAREPART_SUCCESS, UPDATE_SPAREPART_FAILURE, DELETE_SPAREPART_REQUEST, DELETE_SPAREPART_SUCCESS, DELETE_SPAREPART_FAILURE } from "../constants";



export interface SparepartState {
    spareparts: ISparepart[];
    sparepart: ISparepart;
    loading: boolean;
    error: string | null;
  }
  
  interface FetchSparepartsRequestAction extends Action {
    type: typeof FETCH_SPAREPARTS_REQUEST;
  }
  
  interface FetchSparepartsSuccessAction extends Action {
    type: typeof FETCH_SPAREPARTS_SUCCESS;
    payload: ISparepart[];
  }
  
  interface FetchSparepartsFailureAction extends Action {
    type: typeof FETCH_SPAREPARTS_FAILURE;
    payload: string;
  }
  interface FetchSparepartRequestAction extends Action {
    type: typeof FETCH_SPAREPART_REQUEST;
  }
  
  interface FetchSparepartSuccessAction extends Action {
    type: typeof FETCH_SPAREPART_SUCCESS;
    payload: ISparepart;
  }
  
  interface FetchSparepartFailureAction extends Action {
    type: typeof FETCH_SPAREPART_FAILURE;
    payload: string;
  }
  
  interface AddSparepartRequestAction extends Action {
    type: typeof ADD_SPAREPART_REQUEST;
  }
  
  interface AddSparepartSuccessAction extends Action {
    type: typeof ADD_SPAREPART_SUCCESS;
    payload: ISparepart;
  }
  
  interface AddSparepartFailureAction extends Action {
    type: typeof ADD_SPAREPART_FAILURE;
    payload: string;
  }
  
  interface UpdateSparepartRequestAction extends Action {
    type: typeof UPDATE_SPAREPART_REQUEST;
  }
  
  interface UpdateSparepartSuccessAction extends Action {
    type: typeof UPDATE_SPAREPART_SUCCESS;
    payload: {
      id: string, sparepart: ISparepart;
    }
  }
  
  interface UpdateSparepartFailureAction extends Action {
    type: typeof UPDATE_SPAREPART_FAILURE;
    payload: string;
  }
  
  interface DeleteSparepartRequestAction extends Action {
    type: typeof DELETE_SPAREPART_REQUEST;
  }
  
  interface DeleteSparepartSuccessAction extends Action {
    type: typeof DELETE_SPAREPART_SUCCESS;
    payload: string;
  }
  
  interface DeleteSparepartFailureAction extends Action {
    type: typeof DELETE_SPAREPART_FAILURE;
    payload: string;
  }
  
  export type SparepartActionTypes =
    | FetchSparepartsRequestAction
    | FetchSparepartsSuccessAction
    | FetchSparepartsFailureAction
    | FetchSparepartRequestAction
    | FetchSparepartSuccessAction
    | FetchSparepartFailureAction
    | AddSparepartRequestAction
    | AddSparepartSuccessAction
    | AddSparepartFailureAction
    | UpdateSparepartRequestAction
    | UpdateSparepartSuccessAction
    | UpdateSparepartFailureAction
    | DeleteSparepartRequestAction
    | DeleteSparepartSuccessAction
    | DeleteSparepartFailureAction;
