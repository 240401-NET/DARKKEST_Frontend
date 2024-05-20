import { BaseURL } from "../constants/Constant";

export const UserLogin = (
    username: string, 
    // email: string, 
    password: string ) => {
        const loginURL =  BaseURL + "login";
        return fetch(loginURL, {
            method: "POST",
            mode: 'cors',
            credentials: "include",
            body: JSON.stringify({
                    "username": username,
                    "password": password,
                }),
            headers: {
                "Content-type": "application/json"
                }
            })
            .then (response => {
                if(response.ok) {
                    console.log("Response", response);
                    // window.alert("SignIn successful");
                    return response;
                }
            })
            .catch (error => {
                // window.alert("Signin unsuccessful. Please try again!")
                console.log(error);
                throw error;
            })
        }

export const UserLogout = () => {
    const logoutURL = BaseURL + "logout";
        return fetch(logoutURL, {
            method: "POST",
            mode: 'cors',
            credentials: "include",
            headers: {
                "Content-type": "application/json"
                },
            body: ""
            })
            .then (response =>{
                if(response.ok) {
                    // console.log("Response", response);
                    window.alert("Logout successful");
                }
            })
            .catch (error => {
                console.log(error);
                throw error;
            })
        }

export const UserSignUp = async (username: string, email: string, password: string) => {
    try {
        const response = await fetch(BaseURL + "register", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            }),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        return response.json(); // Return parsed JSON response
    } catch (error) {
        throw error;
    }

    // let responseData = await response.json()
    // console.log(responseData);
    // return response;
}