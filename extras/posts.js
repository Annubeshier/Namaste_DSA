
import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handlePosts = (e) => {
    e.preventDefault();
    setPosts([...posts, inputValue]);
    setInputValue('');
  };
  const handleDelete = (index) => {
    let newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  return (
    <>
      <div
        style={{
          width: '100%',
        }}
      >
        <form>
          <input
            style={{ width: '80%', marginRight: '4px' }}
            value={inputValue}
            onChange={handleChange}
            placeholder="Typer here"
          />
          <button
            style={{
              width: '15%',
              backgroundColor: 'blue',
              color: 'white',
              font: 'bold',
            }}
            onClick={handlePosts}
          >
            Posts
          </button>
        </form>
      </div>

      <div style={{ justifyContent: 'space between' }}>
        {posts.map((post, index) => (
          <div
            style={{
              backgroundColor: 'gray',
              marginTop: '10px',
              height: '100px',
            }}
            key={index}
          >
            <div
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2
                style={{ paddingY: '4px', paddingX: '5px', marginLeft: '5px' }}
              >
                {post}
              </h2>
              <button
                style={{ height: '30px', marginRight: '5px' }}
                onClick={() => handleDelete(index)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
