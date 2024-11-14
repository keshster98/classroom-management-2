import { useState } from "react";

import AddNewForm from "./components/addNew";
import StudentsList from "./components/list";

function App() {
  // Change the static list to state list
  const [list, setList] = useState([]);
  console.log(list);
  return (
    <div className="container">
      <div
        className="card rounded shadow-sm mx-auto my-4"
        style={{
          maxWidth: "500px",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Classroom</h3>
          <AddNewForm
            onNewNameAdded={(studentName) => {
              // Clone the existing state
              const newList = [...list];
              // Push the new item into the newList
              newList.push({
                id: Math.random(), // generate id
                // id: newList.length + 1,
                name: studentName,
              });
              // Update the newList with the setState function
              setList(newList);
            }}
          />
        </div>
      </div>
      <StudentsList list={list} />
    </div>
  );
}

export default App;
