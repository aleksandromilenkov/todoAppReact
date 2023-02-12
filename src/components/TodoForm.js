import React from "react";

const CustomForm = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        name="text"
        ref={props.reference}
        className={props.className}
      />
      <button className={props.buttonClassName} onClick={props.buttonOnClick}>
        {props.buttonBody}
      </button>
    </>
  );
};

const TodoForm = (props) => {
  console.log(props.todoToEdit.todo);
  return (
    <form action="" className="todo-form">
      {props.todoToEdit.todo ? (
        <CustomForm
          placeholder="Edit todo"
          reference={props.editRef}
          className="todo-input edit"
          buttonClassName="todo-button edit"
          buttonOnClick={props.editTodo}
          buttonBody="Update todo"
        />
      ) : (
        <CustomForm
          placeholder="Add a todo"
          reference={props.inputRef}
          className="todo-input"
          buttonClassName="todo-button"
          buttonOnClick={props.submitHandler}
          buttonBody="Add a Todo"
        />
      )}
    </form>
  );
};

export default TodoForm;
