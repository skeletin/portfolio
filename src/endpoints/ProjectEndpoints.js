const API = import.meta.env.VITE_BACKEND_URL;
("");

async function getProjects() {
  const endpoint = import.meta.env.VITE_GET_PROJECTS;
  try {
    const response = await fetch(API + endpoint);
    return await response.json();
  } catch (e) {
    throw Error("Error: " + e);
  }
}

export { getProjects };
