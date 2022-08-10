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
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setpost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="search....."
        onChange={settype}
        className="text"
      />
      <br />
      <div>
        {post
          .filter((prev) => prev.title.toLowerCase().includes(task))
          .map((prev) => {
            return (
              <ul key={prev.id}>
                <li key={prev.id} className="listed">
                  {prev.title}
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}
