function TaskItem({ task }){
    return(
    <article>
        <h2>{task.title}</h2>

        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>
            Status: {task.completed ? "Completed" : "Pending"}
        </p>
    </article>
    );
}
export default TaskItem;