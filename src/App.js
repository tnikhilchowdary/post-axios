import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1
      });
      console.log("Post Success:", response.data);
      alert("Post Submitted Successfully!");
      setTitle("");
      setBody("");
    } catch (error) {
      console.log("Post Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="App">
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
