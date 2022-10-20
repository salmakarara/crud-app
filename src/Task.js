export const Task = (props) => {
    return (
      <div
        className="task"
        style={{ backgroundColor: props.completed ? "#3a7bd5" : "white" }}
      >
        <h1>{props.taskName}</h1>
        <button onClick={() => props.completeTask(props.id)}> Complete </button>
        <button onClick={() => props.deleteTask(props.id)}> X </button>
      </div>
    );
  };