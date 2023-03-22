import { Action } from "redux";
import IRepair from "../../models/IRepair";
import { FETCH_REPAIRS_REQUEST, FETCH_REPAIRS_SUCCESS, FETCH_REPAIRS_FAILURE, FETCH_REPAIR_REQUEST, FETCH_REPAIR_SUCCESS, FETCH_REPAIR_FAILURE, ADD_REPAIR_REQUEST, ADD_REPAIR_SUCCESS, ADD_REPAIR_FAILURE, UPDATE_REPAIR_REQUEST, UPDATE_REPAIR_SUCCESS, UPDATE_REPAIR_FAILURE, DELETE_REPAIR_REQUEST, DELETE_REPAIR_SUCCESS, DELETE_REPAIR_FAILURE } from "../constants";



export interface RepairState {
    repairs: IRepair[];
    repair: IRepair;
    loading: boolean;
    error: string | null;
  }
  
  interface FetchRepairsRequestAction extends Action {
    type: typeof FETCH_REPAIRS_REQUEST;
  }
  
  interface FetchRepairsSuccessAction extends Action {
    type: typeof FETCH_REPAIRS_SUCCESS;
    payload: IRepair[];
  }
  
  interface FetchRepairsFailureAction extends Action {
    type: typeof FETCH_REPAIRS_FAILURE;
    payload: string;
  }
  interface FetchRepairRequestAction extends Action {
    type: typeof FETCH_REPAIR_REQUEST;
  }
  
  interface FetchRepairSuccessAction extends Action {
    type: typeof FETCH_REPAIR_SUCCESS;
    payload: IRepair;
  }
  
  interface FetchRepairFailureAction extends Action {
    type: typeof FETCH_REPAIR_FAILURE;
    payload: string;
  }
  
  interface AddRepairRequestAction extends Action {
    type: typeof ADD_REPAIR_REQUEST;
  }
  
  interface AddRepairSuccessAction extends Action {
    type: typeof ADD_REPAIR_SUCCESS;
    payload: IRepair;
  }
  
  interface AddRepairFailureAction extends Action {
    type: typeof ADD_REPAIR_FAILURE;
    payload: string;
  }
  
  interface UpdateRepairRequestAction extends Action {
    type: typeof UPDATE_REPAIR_REQUEST;
  }
  
  interface UpdateRepairSuccessAction extends Action {
    type: typeof UPDATE_REPAIR_SUCCESS;
    payload: {
      id: string, repair: IRepair;
    }
  }
  
  interface UpdateRepairFailureAction extends Action {
    type: typeof UPDATE_REPAIR_FAILURE;
    payload: string;
  }
  
  interface DeleteRepairRequestAction extends Action {
    type: typeof DELETE_REPAIR_REQUEST;
  }
  
  interface DeleteRepairSuccessAction extends Action {
    type: typeof DELETE_REPAIR_SUCCESS;
    payload: string;
  }
  
  interface DeleteRepairFailureAction extends Action {
    type: typeof DELETE_REPAIR_FAILURE;
    payload: string;
  }
  
  export type RepairActionTypes =
    | FetchRepairsRequestAction
    | FetchRepairsSuccessAction
    | FetchRepairsFailureAction
    | FetchRepairRequestAction
    | FetchRepairSuccessAction
    | FetchRepairFailureAction
    | AddRepairRequestAction
    | AddRepairSuccessAction
    | AddRepairFailureAction
    | UpdateRepairRequestAction
    | UpdateRepairSuccessAction
    | UpdateRepairFailureAction
    | DeleteRepairRequestAction
    | DeleteRepairSuccessAction
    | DeleteRepairFailureAction;
