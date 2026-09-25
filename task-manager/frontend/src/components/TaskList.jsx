import TaskItem from "./TaskItem";

function TaskList({tasks}){
    if(tasks.length ===0 ){
        return <p>No tasks</p>
    }
    return(
        <section>
            {tasks.map((task) =>(
                <TaskItem key={task.id} task={task} />
            ))}
        </section>
    );
}
export default TaskList