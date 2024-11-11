import AddNewForm from "./components/addNew";
import StudentsList from "./components/list";

function App() {
  const list = ["John", "Jane", "Jack"];
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
          <AddNewForm />
        </div>
      </div>
      <StudentsList list={list} /> {/* list = {list}, where the left list is linked to the list in const list @ list.js while the right list is linked to the list in const list @ app.js */}
    </div>
  );
}

export default App;
