import { useState } from "react";

function TaskItem({task, onToggleTask, onDeleteTask, onUpdateTask,}) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState(task.priority);

    const handleSave = async () => {
        await onUpdateTask(task.id, {
        title,
        description,
        completed: task.completed,
        priority,
        });

        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <article>
            <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />

            <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />

            <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
            >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            </select>

            <button onClick={handleSave}>
            Save
            </button>

            <button onClick={() => setIsEditing(false)}>
                Cancel
            </button>
        </article>
        );
    }

  return (
    <article>
      <h2>{task.title}</h2>

      <p>{task.description}</p>

      <p>Priority: {task.priority}</p>

      <p>
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <button onClick={() => onToggleTask(task.id)}>
        {task.completed ? "Mark Pending" : "Mark Completed"}
      </button>

      <button onClick={() => setIsEditing(true)}>
        Edit
      </button>

      <button onClick={() => onDeleteTask(task.id)}>
        Delete
      </button>
    </article>
  );
}

export default TaskItem;