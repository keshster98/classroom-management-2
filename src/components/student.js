function Student(props) {
  const { num = 99, id, name = "No name", onStudentDelete } = props;
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <h5 className="mb-0">
        {num}. {name}
      </h5>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          const confirm = window.confirm(
            "Are you sure you want to delete this student?"
          );
          if (confirm) {
            // pass the id up to the StudentsList
            onStudentDelete(id);
          }
        }}
      >
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
}

export default Student;
