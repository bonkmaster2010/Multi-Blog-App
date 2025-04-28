import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/blogDetails.css";

export default function BlogsDetail() {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const blog = blogs[Number(id)];

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(savedBlogs);
  }, []);

  if (!blog) return <h1 className="loading">Loading...</h1>;

  return (
    <div className="blog-details">
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-content">{blog.content}</p>

      <div className="meta-container">
        <div className="meta-box">
          <h3 className="meta-title">Category</h3>
          <p className="meta-item">{blog.category || "Uncategorized"}</p>
        </div>
        
         <div className="meta-box">
          <h3 className="meta-title">Tags</h3>
          <div className="tags-container">
            {blog.tags && blog.tags.length > 0 ? (
              blog.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  #{tag}
                </span>
              ))
            ) : (
              <p className="meta-item">No tags</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
