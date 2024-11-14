import { useState } from "react";

import AddNewForm from "./components/addnew";
import StudentsList from "./components/list";

function App() {
  // change the static list to state list
  const [list, setList] = useState([]);
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
              // clone the existing state
              const newList = [...list];
              // push the new item into the newList
              newList.push({
                id: Math.random(), // generate id
                // id: newList.length + 1,
                name: studentName,
              });
              // update the newList with the setState function
              setList(newList);
            }}
          />
        </div>
      </div>
      <StudentsList
        list={list}
        onStudentDelete={(id) => {
          console.log(id);
        }}
      />
    </div>
  );
}

export default App;
