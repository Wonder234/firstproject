import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Practical() {
  const [task, setask] = useState("");
  const [tasklist, setasklist] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setasklist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function setinput(event) {
    event.preventDefault();
    setask(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        className="input"
        onChange={setinput}
        placeholder="search...."
      />
      <div>
        <ul>
          {tasklist
            .filter((prev) => prev.title.toLowerCase().includes(task))
            .map((prev) => {
              return (
                <li key={prev.id} className="listed">
                  {prev.title}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Practical;
