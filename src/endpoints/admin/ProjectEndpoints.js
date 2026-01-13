const API = import.meta.env.VITE_BACKEND_URL;

async function createProject(formData) {
  const endpoint = import.meta.env.VITE_ADMIN_CREATE_PROJECT;
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

async function uploadFile(file) {
  // 1️⃣ Ask server for a presigned upload
  const res = await fetch(import.meta.env.VITE_PREPARE_UPLOAD_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fileName: file.name,
      contentType: file.type,
    }),
  });

  const { url, fields } = await res.json();

  // 2️⃣ Upload directly to the bucket
  const form = new FormData();
  Object.entries(fields).forEach(([key, value]) => {
    form.append(key, value);
  });

  form.append("Content-Type", file.type);
  form.append("file", file);

  return await fetch(url, {
    method: "POST",
    body: form,
  });
}

export { createProject, uploadFile };
