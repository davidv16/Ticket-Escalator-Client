import { ResultType } from "@remix-run/router/dist/utils";
import IRepair from "../../models/IRepair";

const API_URL = 'https://localhost:5001/api';

//export const getRepairs = async () => {
//    const result = await fetch(`${API_URL}/repairs`, {
//        credentials: 'include',
//    });
//    if(!result) { return [];}
//
//    const json = await result.json();
//    console.log(json);
//    return json;
//};
//
//export const getRepair = async (id: string) => {
//    const result = await fetch(`${API_URL}/repairs/${id}`, {
//        credentials: 'include',
//    });
//    if(!result) { return [];}
//
//    const json = await result.json();
//    console.log(json);
//    return json;
//};

export const addRepair = async (repair: IRepair) => {
    console.log(JSON.stringify(repair));
    const result = await fetch(`${API_URL}/repairs`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(repair),
    });
    if (!result.ok) { return []; }
    return result.json();
};

export const deleteRepair = async (id: string) => {
    const result = await fetch(`${API_URL}/repairs/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    console.log(result);
}

export const updateRepair = async (id: string, repair: IRepair) => {
    const result = await fetch(`${API_URL}/repairs/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(repair),
    });
    if (!result.ok) { return []; }
    return result.json();
}