import "./App.css";
import { useRef, useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
const App = () => {
  const [todos, setTodos] = useState([
    { todo: "Edit video", index: 1, isCompleted: false },
    { todo: "Watch football", index: 2, isCompleted: false },
  ]);
  const [todoToEdit, setTodoToEdit] = useState({ index: null, todo: "" });
  const inputRef = useRef();
  const editRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    if (inputRef.current.value.length <= 2) {
      return;
    }
    setTodos((prevState) => {
      const newArray = [
        ...prevState,
        {
          todo: inputRef.current.value,
          index: Math.floor(Math.random() * 1000),
          isCompleted: false,
        },
      ];
      return newArray;
    });
    setTimeout(() => {
      inputRef.current.value = "";
    }, 2);
  };
  const deleteTodoHandler = (index) => {
    if (index === todoToEdit.index) return;
    const newArray = todos.filter((todo) => todo.index !== index);
    setTodos(newArray);
  };

  const completeTodoHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.index === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const editTodoHandler = (todo) => {
    setTodoToEdit(todo);
    setTimeout(() => {
      editRef.current.value = todo.todo;
      editRef.current.focus();
    }, 2);
  };

  const editTodo = (e) => {
    e.preventDefault();
    if (editRef.current.value.length <= 2) {
      return;
    }
    const newArray = todos.map((todo) => {
      if (todo.index === todoToEdit.index) {
        todo.todo = editRef.current.value;
      }
      return todo;
    });
    setTodos(newArray);
    setTodoToEdit({ index: null, todo: "" });

    editRef.current.value = "";
  };

  return (
    <div className="todo-app">
      <h1>What's the plan for today?</h1>
      <TodoForm
        inputRef={inputRef}
        editRef={editRef}
        submitHandler={submitHandler}
        todoToEdit={todoToEdit}
        editTodo={editTodo}
      />

      {todos?.map((todo, idx) => {
        return (
          <Todo
            key={idx}
            index={todo.index}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            onDelete={deleteTodoHandler}
            completeTodo={completeTodoHandler}
            setTodoToEdit={editTodoHandler}
          />
        );
      })}
    </div>
  );
};

export default App;
