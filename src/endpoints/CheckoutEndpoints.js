const API_URL = import.meta.env.VITE_RAILS_API_URL;

async function getCheckoutConfirmation(sessionId) {
  const endpoint = `${API_URL}/api/v1/checkout_sessions/${sessionId}`;

  try {
    const response = await fetch(endpoint);
    const json = await response.json().catch(() => null);
    if (!response.ok) {
      const err = new Error(json?.message || "Failed to load checkout confirmation");
      err.status = response.status;
      err.data = json;
      throw err;
    }
    return json?.data ?? null;
  } catch (e) {
    throw e;
  }
}

export { getCheckoutConfirmation };
