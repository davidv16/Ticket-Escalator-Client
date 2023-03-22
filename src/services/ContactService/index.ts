import { ResultType } from "@remix-run/router/dist/utils";
import IContact from "../../models/IContact";

const API_URL = 'https://localhost:5001/api';

//export const getContacts = async () => {
//    const result = await fetch(`${API_URL}/contacts`, {
//        credentials: 'include',
//    });
//    if(!result) { return [];}
//
//    const json = await result.json();
//    console.log(json);
//    return json;
//};
//
//export const getContact = async (id: string) => {
//    const result = await fetch(`${API_URL}/contacts/${id}`, {
//        credentials: 'include',
//    });
//    if(!result) { return [];}
//
//    const json = await result.json();
//    console.log(json);
//    return json;
//};

export const addContact = async (contact: IContact) => {
    console.log(JSON.stringify(contact));
    const result = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(contact),
    });
    if (!result.ok) { return []; }
    return result.json();
};

export const deleteContact = async (id: string) => {
    const result = await fetch(`${API_URL}/contacts/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    console.log(result);
}

export const updateContact = async (id: string, contact: IContact) => {
    const result = await fetch(`${API_URL}/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(contact),
    });
    if (!result.ok) { return []; }
    return result.json();
}