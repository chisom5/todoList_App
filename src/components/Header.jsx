import {handleChange, todoInput, handleAddTodo} from '../pages/App';

function Header() {
  return (
    <header class="mt-4 mb-5">
      <h2 class="text-center">TodoList App</h2>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <input
          type="text"
          name="todoValue"
          value={todoInput()}
          onInput={(e) => handleChange(e)}
          style="width:300px"
        />{" "}
        <button class="btn-primary ml-3">
          Add
        </button>
      </form>
    </header>
  );
}

export default Header;
