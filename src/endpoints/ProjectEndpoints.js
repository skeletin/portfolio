const normalizeEndpoint = (endpoint) =>
  endpoint.endsWith("/") ? endpoint.slice(0, -1) : endpoint;

const PROJECTS_ENDPOINT = normalizeEndpoint(
  import.meta.env.VITE_GET_PROJECTS || "/api/projects",
);

async function getProjects() {
  const endpoint = PROJECTS_ENDPOINT;
  try {
    const response = await fetch(endpoint);
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
    const response = await fetch(endpoint);
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
