import { Action } from "redux";
import IContact from "../../models/IContact";
import { FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_FAILURE, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILURE, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS, UPDATE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE } from "../constants";



export interface ContactState {
    contacts: IContact[];
    contact: IContact;
    loading: boolean;
    error: string | null;
  }
  
  interface FetchContactsRequestAction extends Action {
    type: typeof FETCH_CONTACTS_REQUEST;
  }
  
  interface FetchContactsSuccessAction extends Action {
    type: typeof FETCH_CONTACTS_SUCCESS;
    payload: IContact[];
  }
  
  interface FetchContactsFailureAction extends Action {
    type: typeof FETCH_CONTACTS_FAILURE;
    payload: string;
  }
  interface FetchContactRequestAction extends Action {
    type: typeof FETCH_CONTACT_REQUEST;
  }
  
  interface FetchContactSuccessAction extends Action {
    type: typeof FETCH_CONTACT_SUCCESS;
    payload: IContact;
  }
  
  interface FetchContactFailureAction extends Action {
    type: typeof FETCH_CONTACT_FAILURE;
    payload: string;
  }
  
  interface AddContactRequestAction extends Action {
    type: typeof ADD_CONTACT_REQUEST;
  }
  
  interface AddContactSuccessAction extends Action {
    type: typeof ADD_CONTACT_SUCCESS;
    payload: IContact;
  }
  
  interface AddContactFailureAction extends Action {
    type: typeof ADD_CONTACT_FAILURE;
    payload: string;
  }
  
  interface UpdateContactRequestAction extends Action {
    type: typeof UPDATE_CONTACT_REQUEST;
  }
  
  interface UpdateContactSuccessAction extends Action {
    type: typeof UPDATE_CONTACT_SUCCESS;
    payload: {
      id: string, contact: IContact;
    }
  }
  
  interface UpdateContactFailureAction extends Action {
    type: typeof UPDATE_CONTACT_FAILURE;
    payload: string;
  }
  
  interface DeleteContactRequestAction extends Action {
    type: typeof DELETE_CONTACT_REQUEST;
  }
  
  interface DeleteContactSuccessAction extends Action {
    type: typeof DELETE_CONTACT_SUCCESS;
    payload: string;
  }
  
  interface DeleteContactFailureAction extends Action {
    type: typeof DELETE_CONTACT_FAILURE;
    payload: string;
  }
  
  export type ContactActionTypes =
    | FetchContactsRequestAction
    | FetchContactsSuccessAction
    | FetchContactsFailureAction
    | FetchContactRequestAction
    | FetchContactSuccessAction
    | FetchContactFailureAction
    | AddContactRequestAction
    | AddContactSuccessAction
    | AddContactFailureAction
    | UpdateContactRequestAction
    | UpdateContactSuccessAction
    | UpdateContactFailureAction
    | DeleteContactRequestAction
    | DeleteContactSuccessAction
    | DeleteContactFailureAction;
