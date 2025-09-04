const API = import.meta.env.VITE_BACKEND_URL;
const mode = import.meta.env.MODE;

async function createProject(formData) {
  const endpoint =
    mode === "production"
      ? "/create-project"
      : import.meta.env.VITE_ADMIN_CREATE_PROJECT;
  try {
    const response = await fetch(API + endpoint, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    return await response.json();
  } catch (e) {
    throw Error("Error: " + e);
  }
}

export { createProject };
