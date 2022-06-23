import styles from "./component.module.css";
import { todosList, handleTask } from "../pages/App";
const Todos = () => {
  return (
    <div class={styles.list_container}>
      <h5>Todo Items</h5>

      <ul>
        <For each={todosList()}>
          {(item) => (
            <li class="d-flex align-items-center" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleTask(item, "todo")}
              />
              <span style="margin-left: 8px">{item.text}</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default Todos;
