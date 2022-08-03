import { useState } from "react";
import "./App.css";
export default function Practical() {
  const [task, setask] = useState("");
  const [tasklist, settasklist] = useState([]);
  function handlechange(event) {
    setask(event.target.value);
  }
  function addtask() {
    if (task !== "") {
      const taskdetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      settasklist([...tasklist, taskdetails]);
    }
  }

  function deletes(t, id) {
    t.preventDefault();
    settasklist(tasklist.filter((prev) => prev.id != id));
  }
  function comp(elem, id) {
    elem.preventDefault();
    const element = tasklist.findIndex((e) => e.id == id);
    const newtasklist = [...tasklist];
    newtasklist[element] = {
      ...newtasklist[element],
      isCompleted: true,
    };
    settasklist(newtasklist);
  }
  function clear() {
    settasklist([]);
  }
  return (
    <div>
      <br />
      <br />
      <section>
        <input
          type="text"
          onChange={(e) => handlechange(e)}
          placeholder="what are you craving for ?! "
          className="text"
        />
        <button className="btn" onClick={addtask}>
          Add
        </button>
      </section>
      <br />
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((prev) => (
            <li
              key={prev.id}
              className={prev.isCompleted ? "crossText" : "listitem"}
            >
              {prev.value}
              <button className="deletes" onClick={(p) => deletes(p, prev.id)}>
                deletes
              </button>
              <button className="completed" onClick={(t) => comp(t, prev.id)}>
                completed
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <button className="clear" onClick={(e) => clear(e)}>
        Clear All
      </button>
    </div>
  );
}
