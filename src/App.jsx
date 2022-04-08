import { useState } from "react";
import { CompletedArea } from "./components/completed_area";
import { IncompletedArea } from "./components/incompleted_area";
import { InputArea } from "./components/input_area";
import "./styles.css";

export const App = () => {
  const [todos, setTodos] = useState(["ああああ", "かかかか"]);
  const [finishTodos, setFinishTodos] = useState(["やややや"]);
  const [inputText, setInputText] = useState("");

  const changeInput = (event) => {
    setInputText(event.target.value);
  };

  const addTodo = () => {
    if (inputText !== "") {
      const items = [...todos, inputText];
      setTodos(items);
      setInputText("");
    }
  };

  const remove = (i) => {
    const items = [...todos];
    items.splice(i, 1);
    setTodos(items);
  };

  const toggleToCompleted = (i) => {
    const items = [...todos]; // todosと中身が同じ配列を作る（変数名がitems）
    items.splice(i, 1); // itemsという配列のindex番目のTodoを削除（itemsはこの時、indexで選択したtodoが消えている）

    const newItems = [...finishTodos, todos[i]]; // 完了のTodos + これから削除されるTodo（変数名がnewItems）

    setTodos(items); // todosという配列をitemsという配列に入れ替える
    setFinishTodos(newItems); // finishTodosという配列をnewItemsに入れ替える
  };

  const undo = (i) => {
    const items = [...finishTodos]; // finishTodosと中身が同じ配列を作る（変数名がitems）
    items.splice(i, 1); // itemsという配列のindex番目のTodoを削除（itemsはこの時、indexで選択したtodoが消えている）

    const newItems = [...todos, finishTodos[i]]; // 未完了のTodos + これから未完了に移動させるTodo（変数名がnewItems）

    setTodos(newItems); // todosという配列をnewItemsという配列に入れ替える
    setFinishTodos(items); // finishTodosという配列をnewItemsに入れ替える
  };

  return (
    <>
      {/** input area */}
      <InputArea
        inputText={inputText}
        onClick={addTodo}
        onChange={changeInput}
      />
      {/** incompleted area */}
      <IncompletedArea
        incompTodos={todos}
        remove={remove}
        toggle={toggleToCompleted}
      />
      {/** completed area */}
      <CompletedArea compTodos={finishTodos} undoFunc={undo} />
    </>
  );
};
