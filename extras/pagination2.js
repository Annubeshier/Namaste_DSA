import React, { useEffect, useState } from "react";

const PaginatedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // Fetch posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePostsPerPageChange = (e) => {
    setPostsPerPage(Number(e.target.value));
    setCurrentPage(1); // reset page
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>

      {/* Posts per page selector */}
      <div style={{ marginBottom: "10px" }}>
        <label>Posts per page: </label>
        <select value={postsPerPage} onChange={handlePostsPerPageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      {/* Post List */}
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedPosts;