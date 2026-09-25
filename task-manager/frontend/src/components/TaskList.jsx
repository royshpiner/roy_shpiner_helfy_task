import TaskItem from "./TaskItem";

function TaskList({tasks, onToggleTask}){
    if(tasks.length ===0 ){
        return <p>No tasks</p>
    }
    return(
        <section>
            {tasks.map((task) =>(
                <TaskItem key={task.id} task={task} onToggleTask={onToggleTask}/>
            ))}
        </section>
    );
}
export default TaskList