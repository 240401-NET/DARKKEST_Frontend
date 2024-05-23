import { BaseURL } from "../constants/Constant";

export const RegisterOrganization = async (registration: any) => {
    const url = BaseURL + "org/register";
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registration)
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

export const UpdateOrganization = async (update: any) => {
    const url = BaseURL + "org/update";
    const res = await fetch(url, {
        method: "PUT",
        mode: "cors",
        credentials: "include",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(update)
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

export const DeleteOrganization = async (deleteData: { OrgId: number }) => {
    const url = BaseURL + "org/delete";
    console.log(deleteData);
    const res = await fetch(url, {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(deleteData)
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

export const GetOrganization = async (orgId: number) => {
    const url = BaseURL + "org/" + orgId;
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

export const GetOrganizationByName = async (name: string) => {
    const url = BaseURL + "org/" + name;
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

export const GetOrganizations = async () => {
    const url = BaseURL + "orgs";
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
            return response.json();  // Parse the response body as JSON
        }
    })
    .catch (error => {
        console.log(error);
        throw error;
    })
    return res;
}

export const GetOrganizationsByUser = async () => {
    const url = BaseURL + "org/user";
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
            return response.json();  // Parse the response body as JSON
        }
    })
    .catch (error => {
        console.log(error);
        throw error;
    })
    return res;
}