import { ResultType } from "@remix-run/router/dist/utils";
import ISparepart from "../../models/ISparepart";

const API_URL = 'https://localhost:5001/api';

//export const getSpareparts = async () => {
//    const result = await fetch(`${API_URL}/spareparts`, {
//        credentials: 'include',
//    });
//    if(!result) { return [];}
//
//    const json = await result.json();
//    console.log(json);
//    return json;
//};
//
//export const getSparepart = async (id: string) => {
//    const result = await fetch(`${API_URL}/spareparts/${id}`, {
//        credentials: 'include',
//    });
//    if(!result) { return [];}
//
//    const json = await result.json();
//    console.log(json);
//    return json;
//};

export const addSparepart = async (sparepart: ISparepart) => {
    console.log(JSON.stringify(sparepart));
    const result = await fetch(`${API_URL}/spareparts`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(sparepart),
    });
    if (!result.ok) { return []; }
    return result.json();
};

export const deleteSparepart = async (id: string) => {
    const result = await fetch(`${API_URL}/spareparts/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    console.log(result);
}

export const updateSparepart = async (id: string, sparepart: ISparepart) => {
    const result = await fetch(`${API_URL}/spareparts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(sparepart),
    });
    if (!result.ok) { return []; }
    return result.json();
}