const API_URL = "http://localhost:4000/api/tasks";

export const getTasks = async () => {
    const response = await fetch(API_URL);
    if (!response.ok){
        throw new Error("failed to fetch");
    }
    return response.json();
};