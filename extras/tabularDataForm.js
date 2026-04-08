import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const resData = await response.json();
      setData(resData.posts);
    };
    fetchData();
  }, []);
  const handleLike = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              reactions: {
                ...item.reactions,
                likes: item.reactions.likes + 1,
              },
            }
          : item,
      ),
    );
  };
  const handleDislike = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              reactions: {
                ...item.reactions,
                likes: item.reactions.likes - 1,
                dislikes: item.reactions.dislikes + 1,
              },
            }
          : item,
      ),
    );
  };
  return (
    <>
      <h2>App component</h2>
      <Post data={data} handleLike={handleLike} handleDislike={handleDislike} />
    </>
  );
}

const Post = ({ data, handleLike, handleDislike }) => {
  return (
    <>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td style={{ display: "flex" }}>
              <button onClick={() => handleLike(item.id)}>
                Like:{item.reactions.likes}
              </button>
              <button onClick={() => handleDislike(item.id)}>
                Dislike: {item.reactions.dislikes}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
