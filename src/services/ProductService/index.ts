import { ResultType } from "@remix-run/router/dist/utils";
import IProduct from "../../models/IProduct";

const API_URL = 'https://localhost:5001/api';

export const getProducts = async () => {
    const result = await fetch(`${API_URL}/products`, {
        credentials: 'include',
    });
    if(!result) { return [];}

    const json = await result.json();
    console.log(json);
    return json;
};

export const getProduct = async (id: string) => {
    const result = await fetch(`${API_URL}/products/${id}`, {
        credentials: 'include',
    });
    if(!result) { return [];}

    const json = await result.json();
    console.log(json);
    return json;
};

export const addProduct = async (product: IProduct) => {
    console.log(JSON.stringify(product));
    const result = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(product),
    });
    if (!result.ok) { return []; }
    return result.json();
};

export const deleteProduct = async (id: string) => {
    const result = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    console.log(result);
}

export const updateProduct = async (id: string, product: IProduct) => {
    const result = await fetch(`${API_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
        credentials: 'include',
        body: JSON.stringify(product),
    });
    if (!result.ok) { return []; }
    return result.json();
}