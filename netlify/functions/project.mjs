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

  const pathProjectId = event.path
    ?.replace(/\/+$/, "")
    .match(/\/api\/projects\/([^/]+)$/)?.[1];
  const urlProjectId = event.rawUrl
    ?.match(/\/api\/projects\/([^/?#]+)/)?.[1];
  const projectId = event.queryStringParameters?.id || pathProjectId || urlProjectId;

  const baseUrl = apiUrl();
  const apiKey = process.env.RAILS_API_KEY;

  if (!baseUrl || !apiKey) {
    return jsonResponse(500, { error: "BFF is not configured." });
  }

  try {
    if (!projectId) {
      return jsonResponse(400, { error: "Missing project id." });
    }

    const response = await fetch(
      `${baseUrl}/api/v1/projects/${encodeURIComponent(projectId)}`,
      { headers: { "X-API-Key": apiKey } },
    );

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
