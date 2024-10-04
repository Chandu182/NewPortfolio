import { useState,useEffect } from 'react';
const Blog = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load messages from localStorage when the component mounts
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && message) {
      const newUser = { username, message };
      const updatedUsers = [...users, newUser];
      
      // Update the state and localStorage
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Clear the input fields
      setUsername('');
      setMessage('');
    }
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleEdit = (index) => {
    const userToEdit = users[index];
    setUsername(userToEdit.username);
    setMessage(userToEdit.message);

    // Remove the user being edited
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Leave a Message</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>Messages</h3>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Message:</strong> {user.message}
            </p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
  );
}

export default Blog