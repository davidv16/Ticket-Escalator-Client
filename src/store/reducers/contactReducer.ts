import IContact from "../../models/IContact";
import { ADD_CONTACT_FAILURE, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, FETCH_CONTACTS_FAILURE, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS, FETCH_CONTACT_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, UPDATE_CONTACT_FAILURE, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS } from "../constants";
import { ContactActionTypes, ContactState } from "../types/contactTypes";


const initialState: ContactState = {
  contacts: [],
  contact: {
    id: "",
    name: "",
    email: "",
    phoneNumber: ""
  },
  loading: false,
  error: null
};
const contactReducer = ( state: ContactState = initialState, action: ContactActionTypes): ContactState => {
  switch(action.type) {
    //case FETCH_CONTACTS_REQUEST:
    //case FETCH_CONTACT_REQUEST:
    case ADD_CONTACT_REQUEST:
    case UPDATE_CONTACT_REQUEST:
    case DELETE_CONTACT_REQUEST:
      return{
        ...state,
        loading: true,
        error: null
      };
    //case FETCH_CONTACTS_SUCCESS:
    //  return {
    //    ...state,
    //    contacts: action.payload,
    //    loading: false,
    //    error: null,
    //  };
    //case FETCH_CONTACT_SUCCESS:
    //  return {
    //    ...state,
    //    contact: action.payload,
    //    loading: false,
    //    error: null,
    //  };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map((contact: IContact) =>
          contact.id === action.payload.contact.id ? action.payload.contact : contact
          ),
        loading: false,
        error: null,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter((contact: IContact) => contact.id !== action.payload),
        loading: false,
        error: null
      };
    // case FETCH_CONTACTS_FAILURE:
    // case FETCH_CONTACT_FAILURE:
    case ADD_CONTACT_FAILURE:
    case UPDATE_CONTACT_FAILURE:
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default contactReducer;