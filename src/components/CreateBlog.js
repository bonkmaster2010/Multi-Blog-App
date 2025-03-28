import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const addCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handlePublish = () => {
    if (!title || !content) {
      alert("Title and content cannot be empty.");
      return;
    }

    // Get existing blogs from localStorage
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Create new blog entry
    const newBlog = {
      title,
      content,
      categories,
      tags,
      createdAt: new Date().toISOString(),
    };

    // Save updated blogs list to localStorage
    localStorage.setItem("blogs", JSON.stringify([...existingBlogs, newBlog]));

    navigate("/blogs"); // Navigate to blogs page
  };

  return (
    <div className="blog-form">
      <h1>Create Blog</h1>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div>
        <input
          className="tag"
          placeholder="Tags"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
        <button className="add" onClick={addTag}>Add Tag</button>
      </div>
      <div>
        <input
          className="cate"
          placeholder="Categories"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button className="add" onClick={addCategory}>Add Category</button>
      </div>
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
}

export default Create;
