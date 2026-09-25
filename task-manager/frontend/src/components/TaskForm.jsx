import { useState } from "react";
function TaskForm({ onAddTask }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");

    const handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            title,
            description,
            priority,
        };

        onAddTask(task);
        setTitle("");
        setDescription("");
        setPriority("low");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
            />
            <select
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
            >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
            </select>
            <button type="submit"> Add Task </button>
        </form>
    )
}
export default TaskForm