import './TodoItem.css';

function TodoItem (props) {
  return (
    <li>
    <p>
    <span>
      {props.data.taskName}
    </span>
    <span>
      <button onClick={()=> props.handleDelete(props.data.id)}>X</button>
    </span>
    </p>

    </li>
    );
}

export default TodoItem;