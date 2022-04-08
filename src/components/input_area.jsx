export const InputArea = (props) => {
    const { inputText, onChange, onClick, isDisabled } = props;
  
    return (
      <div className="input_area">
        <input
          placeholder="TODOを入力"
          value={inputText}
          onChange={onChange}
          disabled={isDisabled}
        />
        <button
          onClick={onClick}
          disabled={isDisabled}
        >
          追加
        </button>
      </div>
    );
  };
  