import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  let randerTask = <h2>No Task Available </h2>;

  if (mainTask.length > 0) {
    randerTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="task">
            <h5>{t.title}</h5>
            <h6>{t.desc}</h6>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <h1>My ToDo-LiSt</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button>Add Task</button>
      </form>
      <hr />
      <div className="notask">
        <ul>{randerTask}</ul>
      </div>
    </>
  );
}

export default App;
