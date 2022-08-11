import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
export default function Practical() {
  const [task, setask] = useState("");
  const [post, setpost] = useState([]);
  function settype(e) {
    e.preventDefault();
    setask(e.target.value);
  }
  function addtext() {
    if (task !== "") {
      const element = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setpost([...post, element]);
      console.log(setpost([...post, element]));
    }
  }
  function deletes(event, id) {
    event.preventDefault();
    setpost(post.filter((prev) => prev.id != id));
  }

  function completed(elem, id) {
    elem.preventDefault();
    const element = post.findIndex((prev) => prev.id == id);
    const news = [...post];
    news[element] = {
      ...news[element],
      isCompleted: true,
    };
    setpost(news);
  }
  function clear(e) {
    e.preventDefault();
    setpost([]);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={settype}
          placeholder="what are you craving for ?!"
          className="input"
        />
        <button className="add-btn" onClick={addtext}>
          Add
        </button>
      </div>
      <div>
        {post != [] ? (
          <ul>
            {post.map((prev) => (
              <li
                key={prev.id}
                className={prev.isCompleted ? "styless" : "list-item"}
              >
                {prev.value}
                <div className="join">
                  <button
                    className="delete-btn"
                    onClick={(e) => deletes(e, prev.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="completed"
                    onClick={(e) => completed(e, prev.id)}
                  >
                    Completed
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <button className="clear" onClick={clear}>
        Clear
      </button>
    </div>
  );
}
