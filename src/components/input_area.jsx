export const InputArea = (props) => {
  const { inputText, onChange, onClick } = props;

  return (
    <div className="input_area">
      <input placeholder="TODOを入力" value={inputText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
