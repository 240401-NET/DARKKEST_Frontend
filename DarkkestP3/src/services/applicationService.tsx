import { BaseURL } from "../constants/Constant";

export const GetAppsForOpportunity = async (oppId: number) => {
    const url = BaseURL + "applications/opportunity/" + oppId;
    const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
    return res;
}
