export const IncompletedArea = (props) => {
  const { incompTodos, toggle, remove } = props;

  return (
    <div className="incomplete_area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompTodos.map((todo, index) => {
          return (
            <li key={index} className="list_row">
              <div>{todo}</div>
              <button onClick={() => toggle(index)}>完了</button>
              <button onClick={() => remove(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
