const API_URL = "http://localhost:4000/api/tasks";

export const getTasks = async () => {
    const response = await fetch(API_URL);
    if (!response.ok){
        throw new Error("failed to fetch");
    }
    return response.json();
};

export const createTask = async (task) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    if (!response.ok){
        throw new Error("failed to create");
    }
    return response.json();
};

export const toggleTask = async (id) => {
    const response = await fetch(`${API_URL}/${id}/toggle`, {
        method: "PATCH",
    });
    if (!response.ok){
        throw new Error("failed to toggle");
    }
    return response.json();
};

export const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete task");
    }
};

export const updateTask = async (id, task) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    if (!response.ok) {
        throw new Error("Failed to update task");
    }
    return response.json();
};
