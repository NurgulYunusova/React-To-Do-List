import { useSelector } from "react-redux";

function Main() {
  const { todos } = useSelector((state) => state.todosReducer);

  console.log("todos", todos);

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul>
          {todos &&
            todos.map((todo) => (
              <li key={todo.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{todo.text}</label>
                  <button className="destroy" />
                </div>
              </li>
            ))}
        </ul>
        {/* <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn JavaScript</label>
              <button className="destroy" />
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn React</label>
              <button className="destroy" />
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Have a life!</label>
              <button className="destroy" />
            </div>
          </li>
        </ul> */}
      </section>
    </>
  );
}

export default Main;
