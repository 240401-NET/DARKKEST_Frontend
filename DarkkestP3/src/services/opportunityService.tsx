import { BaseURL } from "../constants/Constant";
//import { useAuth } from "../context/AuthContext";



// export const GetAllOpps = async () => {
//     const {token} = useAuth();
//     console.log(token);
//     const url = BaseURL + "opportunity";
//     const res = await fetch(url, {
//         method: "GET",
//         mode: "cors",
//         credentials: "include",
//         headers: {
//             Accept: 'application/json',
//             "Content-Type": "application/json",
//             "Authorization": token ? " "
//         }
//     })
//     .then (response => {
//         if(response.ok) {
//             return response.json();
//         }
//     })
//     .catch (error => {
//         console.log(error);
//         throw error;
//     })
//     return res;
// }

export const GetAllOpps = async (token : string | null) => {
    console.log(token);
    const url = BaseURL + "opportunity";
  
    try {
        const header = new Headers();
        header.append("Authorization", "Bearer " + token);
  
      const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: header
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      return await res.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const GetOppById = async (id: number) => {
  const url = BaseURL + "opportunity/" + id;
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  return res;
};

export const CreateOpp = async (opp: any) => {
  const url = BaseURL + "opportunity";
  const res = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(opp),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  return res;
};

export const UpdateOpp = async (opp: any) => {
  const url = BaseURL + "opportunity";
  const res = await fetch(url, {
    method: "PUT",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(opp),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  return res;
};

export const DeleteOpp = async (id: number) => {
  const url = BaseURL + "opportunity/" + id;
  const res = await fetch(url, {
    method: "DELETE",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  return res;
};

export const GetUserOpps = async () => {
  const url = BaseURL + "opportunity/user";
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
};
