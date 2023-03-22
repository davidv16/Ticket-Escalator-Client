import { Dispatch } from 'redux';
import IContact from '../../../models/IContact';
import * as services from '../../../services/ContactService';
import { FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_FAILURE, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILURE, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS, UPDATE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE } from '../../constants';
import { AppThunk } from '../../types';
import { ContactActionTypes } from '../../types/contactTypes';

  // export const fetchContacts = (): AppThunk => async(dispatch: Dispatch<ContactActionTypes>) => {
  //   dispatch({type: FETCH_CONTACTS_REQUEST});
  //   try {
  //     const contacts: IContact[] = await services.getContacts();
  //     dispatch({
  //       type: FETCH_CONTACTS_SUCCESS,
  //       payload: contacts,
  //     });
  //   } catch (error) {
  //     //@ts-ignore
  //     const errorMsg = error.message;
  //     dispatch({type: FETCH_CONTACTS_FAILURE, payload: errorMsg});
  //   }
  // }
// 
  // export const fetchContact = (id: string): AppThunk => async(dispatch: Dispatch<ContactActionTypes>) => {
  //   dispatch({type: FETCH_CONTACT_REQUEST});
  //   try {
  //     const contact: IContact = await services.getContact(id);
  //     dispatch({
  //       type: FETCH_CONTACT_SUCCESS,
  //       payload: contact,
  //     });
  //   } catch (error) {
  //     //@ts-ignore
  //     const errorMsg = error.message;
  //     dispatch({type: FETCH_CONTACT_FAILURE, payload: errorMsg});
  //   }
  // }

  export const addContact = (contact: IContact): AppThunk => async(dispatch: Dispatch<ContactActionTypes>) => {
    dispatch({type: ADD_CONTACT_REQUEST});
    try {
      const newContact: IContact = await services.addContact(contact);
      dispatch({
        type: ADD_CONTACT_SUCCESS,
        payload: newContact,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: ADD_CONTACT_FAILURE, payload: errorMsg});
    }
  }
  
  export const updateContact = (id: string, contact: IContact): AppThunk => async(dispatch: Dispatch<ContactActionTypes>) => {
    dispatch({type: UPDATE_CONTACT_REQUEST});
    try {
      const updatedContact: IContact = await services.updateContact(id, contact);
      dispatch({
        type: UPDATE_CONTACT_SUCCESS,
        payload: {
          id, contact
        }
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: UPDATE_CONTACT_FAILURE, payload: errorMsg});
    }
  }
  
  export const deleteContact = (id: string): AppThunk => async(dispatch: Dispatch<ContactActionTypes>) => {
    dispatch({type: DELETE_CONTACT_REQUEST});
    try {
      await services.deleteContact(id);
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: DELETE_CONTACT_FAILURE, payload: errorMsg});
    }
  }
