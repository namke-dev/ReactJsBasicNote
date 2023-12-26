import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

const TodoItems = ({ no, display, text, setTodoList }) => {
  const deleteTodo = () => {
    let data = JSON.parse(localStorage.getItem("todolist"));
    data = data.filter((todo) => todo.no !== no);
    setTodoList(data);
  };
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todolist"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodoList(data);
  };

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => toggle(no)}
      >
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      <img
        onClick={() => deleteTodo()}
        className="todoitems-cross-icon"
        src={cross}
        alt=""
      ></img>
    </div>
  );
};

export default TodoItems;
