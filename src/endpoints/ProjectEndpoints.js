const API = import.meta.env.VITE_BACKEND_URL;

async function getProjects() {
  const endpoint = import.meta.env.VITE_GET_PROJECTS;
  try {
    const response = await fetch(API + endpoint);
    return await response.json();
  } catch (e) {
    throw Error("Error: " + e);
  }
}

async function getProject(name) {
  const endpoint = `/api/v1/projects/${name}`;
  try {
    const response = await fetch(API + endpoint);
    const json = await response.json().catch(() => null);
    if (!response.ok) {
      const err = new Error(json?.message || "Project not found");
      err.status = response.status;
      err.data = json;
      throw err;
    }
    return json;
  } catch (e) {
    throw e;
  }
}

export { getProjects, getProject };
