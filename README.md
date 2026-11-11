# EXPERIMENT 8: REACT USER INTERACTIONS – onChange AND onSubmit

**Name:** HANIEL REENA D R  
**Register Number:** 2305001008  
**Department:** CSE

## 1. AIM

To implement user interactions in a React form using onChange to capture input values and onSubmit to process submitted form data.

## 2. ALGORITHM

1. Start the React application.
2. Import useState and the CSS file.
3. Create state to store the Name and Email values.
4. Create handleChange() to read event.target values and update state.
5. Connect handleChange() to the input fields using onChange.
6. Create handleSubmit() and use event.preventDefault().
7. Connect handleSubmit() to the form using onSubmit.
8. Enter the student details and click Submit.
9. Display the submitted Name and Email in an alert box.
10. Stop the application.

## 3. PROJECT STRUCTURE

```text
Experiment_08/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── index.css
```

## 4. PROGRAMS

### Program 1: App.jsx

**Location:** `src/App.jsx`

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Name: " + formData.name +
      "\nEmail: " + formData.email
    );
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```

### Program 2: App.css

**Location:** `src/App.css`

```css
* {
  box-sizing: border-box;
}

#root {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #eef4ff, #f8fafc);
  font-family: "Segoe UI", Arial, sans-serif;
}

.container {
  width: 500px;
  max-width: calc(100% - 40px);
  background: white;
  padding: 40px;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
}

h1 {
  margin: 0 0 28px;
  text-align: center;
  color: #1e3a8a;
  font-size: 29px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 16px;
  margin-bottom: 7px;
  font-size: 15px;
  font-weight: 600;
  color: #334155;
}

input {
  width: 100%;
  padding: 13px 15px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
  background: #f8fafc;
  font-size: 15px;
  outline: none;
}

button {
  width: 100%;
  margin-top: 26px;
  padding: 13px;
  border: none;
  border-radius: 9px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
```

### Program 3: main.jsx

**Location:** `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Program 4: index.css

**Location:** `src/index.css`

```css
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-width: 320px;
  min-height: 100%;
}
```

## 5. EXECUTION

1. Open the Experiment_08 folder in VS Code.
2. Open the terminal.
3. Install the dependencies:

```bash
npm install
```

4. Run the React application:

```bash
npm run dev
```

5. Open the localhost URL displayed in the terminal.
6. Enter the student Name and Email.
7. Click the Submit button.
8. Verify that the entered Name and Email appear in an alert box.

## 6. BUILD CHECK

```bash
npm run build
```

## 7. OUTPUT
<img width="749" height="705" alt="image" src="https://github.com/user-attachments/assets/1456c870-7f13-4e0d-a158-5d6009676e9e" />


## 8. OBSERVATION

The onChange event captures the values entered in the Name and Email fields and updates the React state. When the Submit button is clicked, onSubmit processes the stored data and displays the entered details in an alert box.

## 9. RESULT

Thus, React user interactions using onChange and onSubmit were successfully implemented, and the entered form data was captured and processed correctly.
