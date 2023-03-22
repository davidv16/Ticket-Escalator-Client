import IRepair from "../../models/IRepair";
import { ADD_REPAIR_FAILURE, ADD_REPAIR_REQUEST, ADD_REPAIR_SUCCESS, DELETE_REPAIR_FAILURE, DELETE_REPAIR_REQUEST, DELETE_REPAIR_SUCCESS, FETCH_REPAIRS_FAILURE, FETCH_REPAIRS_REQUEST, FETCH_REPAIRS_SUCCESS, FETCH_REPAIR_FAILURE, FETCH_REPAIR_REQUEST, FETCH_REPAIR_SUCCESS, UPDATE_REPAIR_FAILURE, UPDATE_REPAIR_REQUEST, UPDATE_REPAIR_SUCCESS } from "../constants";
import { RepairActionTypes, RepairState } from "../types/repairTypes";


const initialState: RepairState = {
  repairs: [],
  repair: {
    id: "",
    repairDate: new Date(),
    technicianName: "",
    daytimeHours: 0.0,
    overTimeHours: 0.0,
    driveTrip: 0
  },
  loading: false,
  error: null
};
const repairReducer = ( state: RepairState = initialState, action: RepairActionTypes): RepairState => {
  switch(action.type) {
    //case FETCH_REPAIRS_REQUEST:
    //case FETCH_REPAIR_REQUEST:
    case ADD_REPAIR_REQUEST:
    case UPDATE_REPAIR_REQUEST:
    case DELETE_REPAIR_REQUEST:
      return{
        ...state,
        loading: true,
        error: null
      };
    //case FETCH_REPAIRS_SUCCESS:
    //  return {
    //    ...state,
    //    repairs: action.payload,
    //    loading: false,
    //    error: null,
    //  };
    //case FETCH_REPAIR_SUCCESS:
    //  return {
    //    ...state,
    //    repair: action.payload,
    //    loading: false,
    //    error: null,
    //  };
    case ADD_REPAIR_SUCCESS:
      return {
        ...state,
        repairs: [...state.repairs, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_REPAIR_SUCCESS:
      return {
        ...state,
        repairs: state.repairs.map((repair: IRepair) =>
          repair.id === action.payload.repair.id ? action.payload.repair : repair
          ),
        loading: false,
        error: null,
      };
    case DELETE_REPAIR_SUCCESS:
      return {
        ...state,
        repairs: state.repairs.filter((repair: IRepair) => repair.id !== action.payload),
        loading: false,
        error: null
      };
    // case FETCH_REPAIRS_FAILURE:
    // case FETCH_REPAIR_FAILURE:
    case ADD_REPAIR_FAILURE:
    case UPDATE_REPAIR_FAILURE:
    case DELETE_REPAIR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default repairReducer;