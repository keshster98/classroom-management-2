import { useState } from "react";
import { nanoid } from "nanoid";

import AddNewForm from "./components/addNew";
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
                id: nanoid(), // generate id
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
          // filter OUT the student with the given id
          const newList = list.filter((s) => s.id !== id);
          // update the newList with the setState function
          setList(newList);
        }}
      />
    </div>
  );
}

export default App;
