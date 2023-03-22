import { ResultType } from "@remix-run/router/dist/utils";
import IEmployee from "../../models/IEmployee";

const API_URL = 'https://localhost:5001/api';

export const getEmployees = async () => {
    const result = await fetch(`${API_URL}/employees`, {
        credentials: 'include',
    });
    if(!result) { return [];}

    const json = await result.json();
    console.log(json);
    return json;
};

export const getEmployee = async (id: string) => {
    const result = await fetch(`${API_URL}/employees/${id}`, {
        credentials: 'include',
    });
    if(!result) { return [];}

    const json = await result.json();
    console.log(json);
    return json;
};

export const addEmployee = async (employee: IEmployee) => {
    console.log(JSON.stringify(employee));
    const result = await fetch(`${API_URL}/employees`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(employee),
    });
    if (!result.ok) { return []; }
    return result.json();
};

export const deleteEmployee = async (id: string) => {
    const result = await fetch(`${API_URL}/employees/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    console.log(result);
}

export const updateEmployee = async (id: string, employee: IEmployee) => {
    const result = await fetch(`${API_URL}/employees/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(employee),
    });
    if (!result.ok) { return []; }
    return result.json();
}