export const Todo = ({ listOfTodos, markTodoAsDone }) => {
  return (
    <div>
      <ol>
        {listOfTodos.map((todo, i) => {
          return (
            <li key={i}>
              <span>{todo.text}</span>
              <input
                type="checkbox"
                checked={todo.done}
                value={todo.done}
                onChange={() => {
                  markTodoAsDone(todo);
                }}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
