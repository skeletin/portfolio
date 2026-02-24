const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: typeof body === "string" ? body : JSON.stringify(body),
});

const apiUrl = () => process.env.RAILS_API_URL?.replace(/\/+$/, "");

export const handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return jsonResponse(405, { error: "Method Not Allowed" });
  }

  const baseUrl = apiUrl();
  const apiKey = process.env.RAILS_API_KEY;

  if (!baseUrl || !apiKey) {
    return jsonResponse(500, { error: "BFF is not configured." });
  }

  try {
    const response = await fetch(`${baseUrl}/api/v1/projects`, {
      headers: { "X-API-Key": apiKey },
    });

    const text = await response.text();

    return {
      statusCode: response.status,
      headers: { "Content-Type": "application/json" },
      body: text,
    };
  } catch (_error) {
    return jsonResponse(502, { error: "Upstream request failed." });
  }
};
