import { ResultType } from "@remix-run/router/dist/utils";
import ICustomer from "../../models/ICustomer";

const API_URL = 'https://localhost:5001/api';

export const getCustomers = async () => {
    const result = await fetch(`${API_URL}/customers`, {
        credentials: 'include',
    });
    if(!result) { return [];}

    const json = await result.json();
    console.log(json);
    return json;
};

export const getCustomer = async (id: string) => {
    const result = await fetch(`${API_URL}/customers/${id}`, {
        credentials: 'include',
    });
    if(!result) { return [];}

    const json = await result.json();
    console.log(json);
    return json;
};

export const addCustomer = async (customer: ICustomer) => {
    console.log(JSON.stringify(customer));
    const result = await fetch(`${API_URL}/customers`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(customer),
    });
    if (!result.ok) { return []; }
    return result.json();
};

export const deleteCustomer = async (id: string) => {
    const result = await fetch(`${API_URL}/customers/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    console.log(result);
}

export const updateCustomer = async (id: string, customer: ICustomer) => {
    const result = await fetch(`${API_URL}/customers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(customer),
    });
    if (!result.ok) { return []; }
    return result.json();
}