import Student from "./student";

function StudentsList(props) {
  const { list, onStudentDelete } = props;
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
          // method 1
          // return <Student num={index + 1} name={student.name} />;
          // method 2
          // const { name } = student;
          // return <Student num={index + 1} name={name} />;
          // method 3
          return (
            <Student
              key={student.id}
              num={index + 1}
              {...student}
              onStudentDelete={(id) => {
                onStudentDelete(id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StudentsList;
