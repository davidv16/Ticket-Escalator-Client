import ISparepart from "../../models/ISparepart";
import { ADD_SPAREPART_FAILURE, ADD_SPAREPART_REQUEST, ADD_SPAREPART_SUCCESS, DELETE_SPAREPART_FAILURE, DELETE_SPAREPART_REQUEST, DELETE_SPAREPART_SUCCESS, FETCH_SPAREPARTS_FAILURE, FETCH_SPAREPARTS_REQUEST, FETCH_SPAREPARTS_SUCCESS, FETCH_SPAREPART_FAILURE, FETCH_SPAREPART_REQUEST, FETCH_SPAREPART_SUCCESS, UPDATE_SPAREPART_FAILURE, UPDATE_SPAREPART_REQUEST, UPDATE_SPAREPART_SUCCESS } from "../constants";
import { SparepartActionTypes, SparepartState } from "../types/sparepartTypes";


const initialState: SparepartState = {
  spareparts: [],
  sparepart: {
    id: "",
    partnumber: "",
    name: "",
    vendor: "",
    price: ""
  },
  loading: false,
  error: null
};
const sparepartReducer = ( state: SparepartState = initialState, action: SparepartActionTypes): SparepartState => {
  switch(action.type) {
    //case FETCH_SPAREPARTS_REQUEST:
    //case FETCH_SPAREPART_REQUEST:
    case ADD_SPAREPART_REQUEST:
    case UPDATE_SPAREPART_REQUEST:
    case DELETE_SPAREPART_REQUEST:
      return{
        ...state,
        loading: true,
        error: null
      };
    //case FETCH_SPAREPARTS_SUCCESS:
    //  return {
    //    ...state,
    //    spareparts: action.payload,
    //    loading: false,
    //    error: null,
    //  };
    //case FETCH_SPAREPART_SUCCESS:
    //  return {
    //    ...state,
    //    sparepart: action.payload,
    //    loading: false,
    //    error: null,
    //  };
    case ADD_SPAREPART_SUCCESS:
      return {
        ...state,
        spareparts: [...state.spareparts, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_SPAREPART_SUCCESS:
      return {
        ...state,
        spareparts: state.spareparts.map((sparepart: ISparepart) =>
          sparepart.id === action.payload.sparepart.id ? action.payload.sparepart : sparepart
          ),
        loading: false,
        error: null,
      };
    case DELETE_SPAREPART_SUCCESS:
      return {
        ...state,
        spareparts: state.spareparts.filter((sparepart: ISparepart) => sparepart.id !== action.payload),
        loading: false,
        error: null
      };
    // case FETCH_SPAREPARTS_FAILURE:
    // case FETCH_SPAREPART_FAILURE:
    case ADD_SPAREPART_FAILURE:
    case UPDATE_SPAREPART_FAILURE:
    case DELETE_SPAREPART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default sparepartReducer;