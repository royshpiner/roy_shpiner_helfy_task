import { useEffect, useState } from "react";
import { getTasks } from "./services/taskService";
import TaskList from "./components/TaskList";


function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await getTasks();
                setTasks(data);
            } catch (error) {
                console.error("Error while loading tasks:", error);
            }
        };
        loadTasks();
    }, []);

    return (
        <main>
            <h1>Task Manager</h1>
            <TaskList tasks={tasks} />
        </main>
    );
}

export default App;