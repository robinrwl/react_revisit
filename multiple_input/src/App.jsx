import { useState } from 'react';
import React from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '' // Initialized as an empty string so the box starts blank
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitEvent = (e) => {
    e.preventDefault();
    // 💡 Optional: Convert the string to an actual number before using it
    const finalAge = Number(formData.age); 
    
    console.log(formData.username, formData.email, finalAge);
  };

  return (
    <form onSubmit={submitEvent}>
      <input
        name="username"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email Address"
      />
      {/* New Age Input */}
      <input
        name="age"
        type="number" // Restricts user input to numbers in the browser
        value={formData.age}
        onChange={handleInputChange}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
