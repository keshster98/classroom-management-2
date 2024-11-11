import Student from "./student";

function StudentsList() {
    return (
      <div
        className="card rounded shadow-sm mx-auto my-4"
        style={{
          maxWidth: "500px",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">Students</h3>
          <Student />
          <Student />
        </div>
      </div>
    );
}
  
export default StudentsList;
  