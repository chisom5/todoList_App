import Header from "../../components/Header";
import Todos from "../../components/Todos";
import Done from "../../components/Done";

import { createSignal } from "solid-js";
const [todoInput, setTodoInput] = createSignal("");
const [todosList, setTodosList] = createSignal([]);
const [doneList, setDoneList] = createSignal([]);

const handleChange = (e) => {
  setTodoInput(e.currentTarget.value);
};

const handleAddTodo = (e) => {
  e.preventDefault();
  let exist = todosList().findIndex((i)=> i.text === todoInput());

  if(exist === -1){
    setTodosList([...todosList(), { id:todoInput().length + 1, text: todoInput(), completed: false }]);
    setTodoInput("");
  }else{
    alert('Item already added.')
  }
  
};

const handleTask = (item, type) => {
  if (type === "todo") {
    const d = todosList().filter((i) => i.id !== item.id);
    setTodosList(d);
    setDoneList([...doneList(), { id:doneList().length + 1, text: item.text, completed: true }]);
  } else {
    const d = doneList().filter((i) => i.id !== item.id);
    setTodosList([...todosList(), {id: todosList().length + 1, text: item.text, completed: false }]);
    setDoneList(d);
  }
};

function App() {
  return (
    <div class="container mx-auto" style="width: 400px">
      <Header />
      <div class="d-flex">
        <Todos />
        <Done />
      </div>
    </div>
  );
}

export {
  todoInput,
  todosList,
  doneList,
  handleTask,
  handleAddTodo,
  handleChange,
};
export default App;
