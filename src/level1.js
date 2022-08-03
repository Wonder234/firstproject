import { useState } from "react";
export default function Level1() {
  const [task, setask] = useState("");
  const [sets, reset] = useState([]);
  function addme() {
    if (task !== "") {
      const next = {
        id: Math.floor(Math.random * 1000),
        value: task,
        isCompleted: false,
      };
      reset([...sets, next]);
    }
  }
  function deletes(t, id) {
    t.preventDefault();
    reset(sets.filter((e) => e.id != id));
  }

  function handleclick(e) {
    e.preventDefault();
    setask(e.target.value);
  }
  function delet(e, id) {
    e.preventDefault();
    reset(sets.filter((prev) => prev.id != id));
  }
  function clears() {
    reset([]);
  }
  return (
    <div>
      <section className="secs">
        <input
          type="text"
          placeholder="what are you craving for ?"
          className="text"
          onChange={handleclick}
        />
        <button className="btn" onClick={addme}>
          Enter
        </button>
      </section>
      <article>
        {sets !== [] ? (
          <ul>
            {sets.map((prev) => (
              <li key={prev.id} className="list">
                {prev.value}
                <button
                  className="deletes"
                  onClick={(e) => deletes(e, prev.id)}
                >
                  deletes
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </div>
  );
}
