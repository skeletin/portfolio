const API = import.meta.env.VITE_BACKEND_URL;

async function getProjects() {
  try {
    const response = await fetch(API + "/api/v1/projects");
    return await response.json();
  } catch (e) {
    throw Error("Error: " + e);
  }
}

export { getProjects };
