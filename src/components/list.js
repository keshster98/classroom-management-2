import Student from "./student";

function StudentsList(props) {
  const { list } = props;
  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{
        maxWidth: "500px",
      }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">Students</h3>
        {list.map((student_name) => {
          return <Student num={1} name={student_name} />;
        })}
      </div>
    </div>
  );
}

export default StudentsList;
