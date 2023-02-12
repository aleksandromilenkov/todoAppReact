import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
const Todo = (props) => {
  const completeTodoHandler = () => {
    props.completeTodo(props.index);
  };
  const deleteHandler = () => {
    props.onDelete(props.index);
  };
  const editHandler = () => {
    props.setTodoToEdit({
      index: props.index,
      todo: props.todo,
      isCompleted: props.isCompleted,
    });
  };

  return (
    <div className={`todo-row ${props.isCompleted ? "complete" : ""}`}>
      <div onClick={completeTodoHandler} className="todo-text">
        {props.todo}
      </div>
      <div className="icons">
        <TiEdit className="edit-icon" onClick={editHandler} />
        <RiCloseCircleLine className="delete-icon" onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default Todo;
