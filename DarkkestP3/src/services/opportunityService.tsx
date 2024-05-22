import { BaseURL } from "../constants/Constant";

export const GetAllOpps = async () => {
    const url = BaseURL + "opportunity";
    const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        }
    })
    .then (response => {
        if(response.ok) {
            return response;
        }
    })
    .catch (error => {
        console.log(error);
        throw error;
    })
    return res;
}

export const GetOppById = async (id: number) => {
    const url = BaseURL + "opportunity/" + id;
    const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        }
    })
    .then (response => {
        if(response.ok) {
            return response;
        }
    })
    .catch (error => {
        console.log(error);
        throw error;
    })
    return res;
}

export const CreateOpp = async (opp: any) => {
    const url = BaseURL + "opportunity";
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(opp)
    })
    .then (response => {
        if(response.ok) {
            return response;
        }
    })
    .catch (error => {
        console.log(error);
        throw error;
    })
    return res;
}

export const UpdateOpp = async (opp: any) => {
    const url = BaseURL + "opportunity";
    const res = await fetch(url, {
        method: "PUT",
        mode: "cors",
        credentials: "include",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(opp)
    })
    .then (response => {
        if(response.ok) {
            return response;
        }
    })
    .catch (error => {
        console.log(error);
        throw error;
    })
    return res;
}

export const DeleteOpp = async (id: number) => {
    const url = BaseURL + "opportunity/" + id;
    const res = await fetch(url, {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        }
    })
    .then (response => {
        if(response.ok) {
            return response;
        }
    })
    .catch (error => {
        console.log(error);
        throw error;
    })
    return res;
}