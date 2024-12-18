import React, { useEffect, useState } from "react";
// Remove Link import if you're not using it
// import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Remove showNotification state if you're not using it
  // const [showNotification, setShowNotification] = useState(true);

  const API_URL = "http://localhost:2024/api/admin/blogs";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Attempting to fetch from:", API_URL);

        const response = await fetch(API_URL);
        console.log("Response status:", response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.log("Error response body:", errorText);
          throw new Error(
            `HTTP error! status: ${response.status}. Details: ${errorText}`
          );
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        if (Array.isArray(data)) {
          setPosts(data);
        } else if (data.posts && Array.isArray(data.posts)) {
          setPosts(data.posts);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (error) {
        console.error("Detailed error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    // Remove the notification timer since we're not using it
    // const timer = setTimeout(() => setShowNotification(false), 5000);
    // return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ fontSize: "20px", color: "#666", marginBottom: "20px" }}>
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: "16px",
          margin: "16px",
          backgroundColor: "#fee2e2",
          border: "1px solid #ef4444",
          borderRadius: "8px",
          color: "#dc2626",
        }}
      >
        <p>Error loading blog posts: {error}</p>

        <div style={{ marginTop: "20px" }}>
          <h4>Possible solutions:</h4>
          <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
            <li>Check if your backend server is running on port 2024</li>
            <li>Verify the API endpoint path (/api/admin/blogs)</li>
            <li>Check for CORS configuration on the backend</li>
            <li>Ensure you're using the correct HTTP method (GET)</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      <header
        style={{
          backgroundColor: "white",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "24px 16px",
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#111827",
            }}
          >
            BLOG
          </h1>
          <nav
            style={{
              fontSize: "14px",
              color: "#6b7280",
              marginTop: "8px",
            }}
          >
            {/* Replace Link with regular anchor tags if you're not using React Router */}
            <a
              href="/main"
              style={{ color: "#6b7280", textDecoration: "none" }}
            >
              Home
            </a>
            <span style={{ margin: "0 8px" }}>/</span>
            <a
              href="/blog"
              style={{ color: "#6b7280", textDecoration: "none" }}
            >
              Blog
            </a>
          </nav>
        </div>
      </header>

      <main
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "32px 16px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {posts.length === 0 ? (
            <p
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "32px",
                color: "#6b7280",
              }}
            >
              No blog posts found.
            </p>
          ) : (
            posts.map((post, index) => (
              <article
                key={post.id || index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                {post.avatar && (
                  <div style={{ position: "relative", paddingTop: "56.25%" }}>
                    <img
                      src={post.avatar}
                      alt={post.title || "Blog post image"}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.src = "/api/placeholder/400/300";
                        e.target.alt = "Placeholder image";
                      }}
                    />
                  </div>
                )}
                <div style={{ padding: "24px" }}>
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "8px",
                    }}
                  >
                    {post.title || "Untitled Post"}
                  </h2>
                  <p
                    style={{
                      color: "#4b5563",
                      marginBottom: "16px",
                    }}
                  >
                    {post.description || "No description available"}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14px",
                      color: "#6b7280",
                    }}
                  >
                    <span>By ThemeNey</span>
                    <time>{post.date || "No date"}</time>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
