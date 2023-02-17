import './TodoItem.css';

function TodoItem (props) {
  return (
    <li>
      {props.data.taskName}
    </li>
    );
}

export default TodoItem;