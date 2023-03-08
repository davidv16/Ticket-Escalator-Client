import { ResultType } from "@remix-run/router/dist/utils";
import ITicket from "../../models/ITicket";

const API_URL = 'https://localhost:5001/api';

export const getTickets = async () => {
    const result = await fetch(`${API_URL}/tickets`, {
        credentials: 'include',
    });
    if(!result) { return [];}

    const json = await result.json();
    console.log(json);
    return json;
};

export const getTicket = async (id: string) => {
    const result = await fetch(`${API_URL}/tickets/${id}`, {
        credentials: 'include',
    });
    if(!result) { return [];}

    const json = await result.json();
    console.log(json);
    return json;
};

export const addTicket = async (ticket: ITicket) => {
    const result = await fetch(`${API_URL}/tickets`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(ticket),
    });
    if (!result.ok) { return []; }
    return result.json();
};

export const deleteTicket = async (id: string) => {
    const result = await fetch(`${API_URL}/tickets/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    console.log(result);
}

export const updateTicket = async (id: string, ticket: ITicket) => {
    const result = await fetch(`${API_URL}/tickets/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(ticket),
    });
    if (!result.ok) { return []; }
    return result.json();
}