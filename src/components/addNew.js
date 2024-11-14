import { useState } from "react";

function AddNewForm(props) {
  const { onNewNameAdded } = props;
  const [studentName, setStudentName] = useState("");
  return (
    <div>
      <form>
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Add new student..."
            name="student_name"
            value={studentName}
            required
            onChange={(event) => {
              // update the studetName state
              setStudentName(event.target.value);
            }}
          />
          <button
            className="btn btn-primary btn-sm rounded ms-2"
            onClick={(event) => {
              // disable the button submit behaviour
              event.preventDefault();
              // check for empty string
              if (studentName === "") {
                alert("Please enter the name");
              } else {
                // passing the name back to the parent component
                onNewNameAdded(studentName);
                // reset the state
                setStudentName("");
              }
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewForm;
