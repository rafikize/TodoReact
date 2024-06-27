import Button from "./Button";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${
        todo.selected ? "selected" : ""
      }`}
    >
      <span className="flex-fill">
        {todo.content} {todo.done && " ✅ "}{" "}
      </span>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
        className="mr-15"
        text="Valider"
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
        className="mr-15"
        text="Editer"
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
        className="mr-15"
        text="Supprimer"
      />
    </li>
  );
}

export default TodoItem;
