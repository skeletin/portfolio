const API = import.meta.env.VITE_BACKEND_URL;
const mode = import.meta.env.MODE;

async function login(credentials) {
  const endpoint =
    mode === "production" ? "/login" : import.meta.env.VITE_ADMIN_LOGIN;
  try {
    const response = await fetch(API + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include",
    });
    return await response.json();
  } catch (e) {
    throw Error("Error: " + e);
  }
}

async function status() {
  const endpoint =
    mode === "production" ? "/status" : import.meta.env.VITE_ADMIN_STATUS;
  try {
    const response = await fetch(API + endpoint, { credentials: "include" });
    return await response.json();
  } catch (e) {
    throw Error("Error: " + e);
  }
}

export { login, status };
