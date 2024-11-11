import AddNewForm from "./components/addNew";
import StudentsList from "./components/list";

function App() {
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
      <StudentsList />
    </div>
  );
}

export default App;
