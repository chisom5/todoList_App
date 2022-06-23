import styles from "./component.module.css";
import { doneList, handleTask } from "../pages/App";
const Done = () => {
  return (
    <div class={styles.list_container}>
      <h5>Completed Items</h5>

      <ul>
        <For each={doneList()}>
          {(item) => (

            <li class="d-flex align-items-center" key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleTask(item, "done")}
              />
              <span style="margin-left: 8px">{item.text}</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default Done;
