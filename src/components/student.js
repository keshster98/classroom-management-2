function Student(props) {
  const { num = 99, name = "No name" } = props;
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <h5 className="mb-0">
        {num}. {name}
      </h5>
    </div>
  );
}

export default Student;
