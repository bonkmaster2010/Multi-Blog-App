import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/blogs.css';

function Blogs(props) {
  const [Blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Retrieve blogs from localStorage
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(savedBlogs);
  }, []);

  const remove = (index) => {
    const updatedBlogs = Blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  // Filter blogs based on selected category
  const filtered = selectedCategory === "All"
    ? Blogs
    : Blogs.filter(blog => (blog.categories || []).includes(selectedCategory));

  const categories = ["All", ...new Set(Blogs.flatMap(blog => blog.categories || []))];

  return (
    <div id={props.id} className='blog-container'>
      <h1 id='blogs-title'>Blogs</h1>

      {/* Category Filter Select Dropdown */}
      <div className="category-filter">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filtered.length > 0 ? (
        filtered.map((blog, i) => (
          <div key={i} className='blog'>
         <NavLink style={{textDecoration: "none"}} to={`/blogs/${i}`}>
            <h3 id='title'>{blog.title}</h3>
            <p id='content'>{blog.content}</p>
            <p id='categories'>
              Categories: {blog.categories && blog.categories.length > 0
                ? blog.categories.join(", ")
                : "No Categories"}
            </p>
            <div id="tags">
              Tags: {blog.tags && blog.tags.length > 0
                ? blog.tags.map((tag, idx) => <p key={idx}>{tag}</p>)
                : "No tags"}
            </div>
            </NavLink>
            <button onClick={() => remove(i)}>Delete Blog</button>
          </div>
          
        ))
      ) : (
        <h1 id='no-blogs'>No Blogs Available</h1>
      )}
    </div>
  );
}

export default Blogs;
