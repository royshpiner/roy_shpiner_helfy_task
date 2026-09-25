function TaskItem({ task, onToggleTask }){
    return(
    <article>
        <h2>{task.title}</h2>

        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>
            Status: {task.completed ? "Completed" : "Pending"}
        </p>
        <button onClick={()=> onToggleTask(task.id)}>
            {task.completed ? "mark pending" : "mark completed"}
        </button>
    </article>
    );
}
export default TaskItem;