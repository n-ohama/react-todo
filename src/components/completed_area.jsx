export const CompletedArea = (props) => {
  const { compTodos, undoFunc } = props;

  return (
    <div className="complete_area">
      <p className="title">完了のTODO</p>
      <ul>
        {compTodos.map((todo, index) => {
          return (
            <li key={index} className="list_row">
              <div>{todo}</div>
              <button onClick={() => undoFunc(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
