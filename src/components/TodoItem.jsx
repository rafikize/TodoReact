function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  return (
    <li className="mb-10 d-flex flex-row justify-content-center align-items-center p-10">
      <span className="flex-fill">
        {todo.content} {todo.done && " ✅ "}{" "}
      </span>
      <button onClick={toggleTodo} className="btn btn-primary mr-15">
        Valider
      </button>
      <button onClick={editTodo} className="btn btn-primary mr-15">Modifier</button>
      <button onClick={deleteTodo} className="btn btn-reverse-primary mr-15">
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
