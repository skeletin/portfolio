const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const PROJECTS_ENDPOINT = import.meta.env.VITE_GET_PROJECTS || "/api/projects";

async function getProjects() {
  const endpoint = PROJECTS_ENDPOINT;
  try {
    const response = await fetch(`${API_BASE}${endpoint}`);
    const json = await response.json().catch(() => null);
    if (!response.ok) {
      const err = new Error(json?.message || "Failed to load projects");
      err.status = response.status;
      err.data = json;
      throw err;
    }
    return json;
  } catch (e) {
    throw e;
  }
}

async function getProject(id) {
  const endpoint = `${PROJECTS_ENDPOINT}/${id}`;
  try {
    const response = await fetch(`${API_BASE}${endpoint}`);
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
