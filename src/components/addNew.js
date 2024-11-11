function AddNewForm() {
    return (
      <div>
        <form>
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Add new student..."
              name="student_name"
              required
            />
            <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
          </div>
        </form>
      </div>
    );
}
  
export default AddNewForm;
  