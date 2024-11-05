const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchData = async (endpoint) => {
    const response = await fetch(`${apiUrl}${endpoint}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return await response.json();
};