// "props" exists in every React Component
// props passes data from parent code to child code

function Student(props) {
    return (
        <div className="d-flex justify-content-between align-items-center mt-3">
            <h5 className="mb-0">{props.num}. {props.name}</h5>
        </div>
    );
}

export default Student;
  