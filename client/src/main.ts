// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));



import React, { Component } from "react";
import ReactDOM from "react-dom";

// Main App Component
export default class App extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      tasks: [], // Array of tasks
      newTask: "", // Input field value
    };

    // Binding methods to `this`
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleTaskCompletion = this.toggleTaskCompletion.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  // Handle input field change
  handleInputChange(event) {
    this.setState({ newTask: event.target.value });
  }

  // Add a new task
  addTask() {
    if (this.state.newTask.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [
          ...prevState.tasks,
          { text: prevState.newTask, completed: false },
        ],
        newTask: "", // Clear input field
      }));
    }
  }

  // Toggle task completion
  toggleTaskCompletion(index) {
    const updatedTasks = this.state.tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed }; // Toggle completion
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  }

  // Delete a task
  deleteTask(index) {
    const updatedTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });
  }

  render() {
    return (
      <div style={styles.appContainer}>
        <h1 style={styles.header}>To-Do App</h1>
        {/* Input Field and Add Button */}
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={this.state.newTask}
            onChange={this.handleInputChange}
            style={styles.input}
          />
          <button onClick={this.addTask} style={styles.addButton}>
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul style={styles.taskList}>
          {this.state.tasks.map((task, index) => (
            <li
              key={index}
              style={{
                ...styles.taskItem,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#aaa" : "#000",
              }}
            >
              <span
                onClick={() => this.toggleTaskCompletion(index)}
                style={styles.taskText}
              >
                {task.completed ? "✅" : "🔲"} {task.text}
              </span>
              <button
                onClick={() => this.deleteTask(index)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Inline styles (older approach with style objects)
const styles = {
  appContainer: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  header: {
    fontSize: "2em",
    color: "#333",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "250px",
  },
  addButton: {
    marginLeft: "10px",
    padding: "10px 15px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  taskList: {
    listStyle: "none",
    padding: "0",
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f9f9f9",
    padding: "10px",
    margin: "10px auto",
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  taskText: {
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

// Render the App
// ReactDOM.render(<App />, document.getElementById("root"));
