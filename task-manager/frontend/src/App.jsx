import { useEffect, useState } from "react";
import { getTasks, createTask, toggleTask, deleteTask, updateTask } from "./services/taskService";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";



function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

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

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);

            setTasks((currentTasks) =>
                currentTasks.filter((task) => task.id !== id)
            );
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };
    const handleUpdateTask = async (id, taskData) => {
        try {
            const updatedTask = await updateTask(id, taskData);
            setTasks((currentTasks) =>
                currentTasks.map((task) =>
                    task.id === id ? updatedTask : task
                )
            );
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };
    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") {
            return task.completed;
        }

      if (filter === "pending") {
            return !task.completed;
      }

      return true;
    });
        

    return (
        <main>
            <h1>Task Manager</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskFilter filter={filter} onFilterChange={setFilter} />
            <TaskList
                tasks={filteredTasks}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
                onUpdateTask={handleUpdateTask}
            />
        </main>
    );
}

export default App;