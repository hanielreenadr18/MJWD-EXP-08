import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Name: ' + formData.name + '\nEmail: ' + formData.email)
  }

  return (
    <div className="container">
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name}
          onChange={handleChange} placeholder="Enter your name" />
        <label>Email</label>
        <input type="email" name="email" value={formData.email}
          onChange={handleChange} placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
