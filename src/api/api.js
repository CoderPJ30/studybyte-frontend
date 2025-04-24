const API_BASE_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : import.meta.env.VITE_BACKEND_URL;

// Helper function to get the access token from storage
const getToken = () => localStorage.getItem("token");

// Centralized API function
const apiCall = async (endpoint, { method = "GET", body = null, headers = {} } = {}) => {
  try {
    const token = getToken();

    const response = await fetch(`${API_BASE_URL}/api/v1${endpoint}`, {
      method,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/pdf")) {
      const blob = await response.blob();
      if (!response.ok) throw new Error("Failed to fetch PDF");
      return { data: blob };
    }

    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || `API Error: ${response.statusText}`);
    }

    return responseData;
  } catch (error) {
    console.error("API Call Error:", error);
    throw error;
  }
};

export default apiCall;