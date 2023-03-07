const API_URL = 'http://localhost:5001/api';

export const getTickets = async () => {
    const result = await fetch(`${API_URL}/tickets`, {
        credentials: 'include',
    });
    if(!result) { return [];}

    const json = await result.json();
    console.log(json);
    return json;
};