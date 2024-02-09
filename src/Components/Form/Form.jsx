import React, { useState } from 'react';

function From() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
  
      event.preventDefault();
      alert(`Submitted Name: ${name}, Email: ${email}`);
  
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button type="submit">Submit</button>

        </form>
    )
}

export default From