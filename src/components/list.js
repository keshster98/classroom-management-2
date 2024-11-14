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
        {list.map((student, index) => {
          // Method 1
          // return <Student num={index + 1} name={student.name} />;

          // Method 2
          // const { name } = student;
          // return <Student num={index + 1} name={name} />;

          // Method 3
          return <Student key={student.id} num={index + 1} {...student} />;
        })}
      </div>
    </div>
  );
}

export default StudentsList;
