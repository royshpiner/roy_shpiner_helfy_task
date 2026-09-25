import { useEffect, useState } from "react";
import { getTasks, createTask, toggleTask } from "./services/taskService";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";



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
    const handleAddTask = async (task) => {
        try{
            const newTask = await createTask(task);

            setTasks((currentTasks) => [...currentTasks, newTask]);
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    const handleToggleTask = async (id) => {
        try{
            const updatedTask = await toggleTask(id);

            setTasks((currentTasks) => currentTasks.map((task) => task.id === id ? updatedTask : task));
        } catch (error) {
            console.error("Error toggling task:", error);
        }
    };
        

    return (
        <main>
            <h1>Task Manager</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onToggleTask={handleToggleTask}
            />
        </main>
    );
}

export default App;