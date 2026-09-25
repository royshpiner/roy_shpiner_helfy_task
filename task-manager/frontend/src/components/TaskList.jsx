import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  onUpdateTask,
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    if (currentIndex >= tasks.length) {
        setCurrentIndex(0);
    }
    }, [tasks.length, currentIndex]);

    if (tasks.length === 0) {
        return <p>No tasks available.</p>;
    }

    const nextTask = () => {
        setCurrentIndex((currentIndex + 1) % tasks.length);
    };

    const previousTask = () => {
        setCurrentIndex(
        (currentIndex - 1 + tasks.length) % tasks.length
        );
    };

    const task = tasks[currentIndex];

    return (
        <section>


            <button onClick={previousTask}>
                Previous
            </button>

            <TaskItem
                task={task}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}
                onUpdateTask={onUpdateTask}
            />

            <button onClick={nextTask}>
                Next
            </button>
        </section>
    );
}

export default TaskList;