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

async function uploadFile(formData) {
  // Read lambda endpoint from environment variable
  const lambdaUrl = import.meta.env.VITE_UPLOAD_LAMBDA_URL;
  
  if (!lambdaUrl) {
    throw new Error("VITE_UPLOAD_LAMBDA_URL environment variable is not set");
  }
  
  try {
    const response = await fetch(lambdaUrl, {
      method: "POST",
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (e) {
    throw Error("Error: " + e);
  }
}

export { createProject, uploadFile };
