//TODO: ALL URLS HERE ARE PERPESCITVE TO BE CHANGED LATER

//todo: might need to edit these depending on how our provider is handling these
export const userLogin = async (username: string, password: string): Promise<void> => {
    //TODO: edit this
    const url = "http://localhost:5000/login";
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    if (!res.ok) {
        throw new Error("Failed to login");
    }
    const data = await res.json();
    return data;
}

export const userLogout = async (): Promise<void> => {
    //TODO: edit this
    const url = "http://localhost:5000/logout";
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!res.ok) {
        throw new Error("Failed to logout");
    }

    //TODO: remove this
    console.log("Logged out");
}

export const userSignup = async (email: string, username: string, password: string): Promise<void> => {
    //TODO: edit this
    const url = "http://localhost:5000/signup";
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            username: username,
            password: password
        })
    })
    if (!res.ok) {
        throw new Error("Failed to signup");
    }
    const data = await res.json();

    //TODO: remove this
    console.log(data);
}