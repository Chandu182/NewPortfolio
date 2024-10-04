import { useState,useEffect } from 'react';
import './Blogs.css'
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
    <div className='Blogcontainer'>
      <div className="blog_1">
      <h2 className='leave'>Leave a Blog Message</h2>
      <form onSubmit={handleSubmit}>
        <div className='Username'>
          <input
            type="text"
            value={username}
            className='Uname'
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Your Name'
            required
          />
        </div>
        <div className='blogarea'>
          <textarea
            value={message}
            className='blogtextarea'
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Write A Blog Message'
            required
          />
        </div>
        <button className='Submit' type="submit">Submit</button>
      </form>
      </div>
      <div className="blog-2">
      <h3 id='Commenttitle'>Comments</h3>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className='blog_2_content'>
            <p className='username'>
               {user.username}
            </p>
            <p className='usermessage'>
               {user.message}
            </p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No messages yet.</p>
      )}
      </div>
    </div>
  );
}

export default Blog