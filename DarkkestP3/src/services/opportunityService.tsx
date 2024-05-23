import { BaseURL } from "../constants/Constant";

export const GetAllOpps = async () => {
  const url = BaseURL + "opportunity";
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json(); // Parse JSON here
      return data;
    } else {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
  } catch (error) {
    console.error("There was a problem withthe fetch operation:", error);
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
