const API_BASE_URL = "http://localhost:3000/api/v1";

// Helper function to get the access token from storage
const getToken = () => localStorage.getItem("token");

// Centralized API function
const apiCall = async (endpoint, { method = "GET", body = null, headers = {} } = {}) => {
  try {
    const token = getToken();

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

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