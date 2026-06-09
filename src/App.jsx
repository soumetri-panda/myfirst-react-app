import { useState } from "react";
import "./App.css";
function App() {
  const [student, setStudent] = useState({
    name: "",
    age: " ",
    course: "",
  });
  const [students, setStudents] = useState([]);
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const addStudent = () => {
    if (!student.name || !student.age || !student.course) {
      alert("Please fill all the fields");
      return;
    }
    setStudents([...students, student]);
    //...students (the spread operator)
    //the three dots .... are called the spread operator in JavaScript. It allows you to expand an iterable (like an array or an object) into individual elements. In this case, ...students is used to create a new array that includes all the existing students, and then the new student is added to that array. This way, we are not mutating the original students array but creating a new one with the added student.
    setStudent({
      name: "",
      age: "",
      course: "",
    });
  };
  //setstudent is used to update the state of the student object. When we call setStudent with a new object, it replaces the existing student state with the new one. In this case, after adding a student to the students array, we reset the student state to an empty object with empty values for name, age, and course. This allows us to clear the input fields in the form for the next entry.
  //it tells react  throw away whatever data was in the student object before,
  //and replace it  with this new object.

  return (
    <div>
      <header>
        <h1>Student Management System</h1>

        <nav>
          <a href="#Home">Home</a>
          <a href="#Students"> Students</a>
          <a href="#Course">Course</a>
          <a href="#Contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to the Student Management System</h2>
        <p>Manage student records efficiently and effectively using React.</p>
      </section>

      <section className="cards">
        <div className="card">
          <h3>Students</h3>
          <p>Total student records managed here</p>
        </div>
        <div className="card">
          <h3>Courses</h3>
          <p>Track your enrolled course here</p>
        </div>

        <div className="card">
          <h3>Reports</h3>
          <p>Generate report and monitor progress</p>
        </div>

        <div className="card">
          <h3>Student Courses</h3>
          <p>Manage and view all student course enrollments</p>
        </div>

        <div className="card">
          <h3>Performance Reports</h3>
          <p>Analyze student performance and generate detailed analytics</p>
        </div>
      </section>

      <section className="form-container">
        <h2>Add Student</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={student.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
          />
          <button type="button" onClick={addStudent}>
            Add Student
          </button>
        </form>
      </section>

      {/* table section */}
      <section className="table-container">
        <h2>student records</h2>
        {students.length === 0 ? (
          <p>No students added yet</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr key={index}>
                  <td>{s.name}</td>
                  <td>{s.age}</td>
                  <td>{s.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
      <section className="links">
        <h2>Learning resourses</h2>
        <a
          href="https://reactalt.org/docs/getting-started.html"
          target="_blank"
          rel="noreferrer"
        >
          React documentation
        </a>
        <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
          React class
        </a>
        <a href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
          VITE Set
        </a>
      </section>
      <footer className="footer">
        <p>@2026 student managemnt system |build with react</p>
      </footer>
    </div>
  );
}
export default App;
