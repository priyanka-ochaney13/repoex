import { useState } from "react";

export default function Home() {
    const [repoLink, setRepoLink] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!repoLink.trim()) {
            alert("Please enter a valid repository link.");
            return;
        }
        setLoading(true);
        setTimeout(() => setLoading(false), 2000); 
    }

  return (
    <div className="home-container">
      <h1 style={{ color: "var(--gh-green)", marginBottom: "1rem" }}>Welcome to RepoX</h1>
      <h2>
        <strong>RepoX</strong> helps you visualize your repository structure with ease.
      </h2>
      <ul
        style={{
          listStyle: "disc inside",
          maxWidth: 500,
          margin: "2rem auto",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <li>Understand your codebase at a glance</li>
        <li>Visualize dependencies and file structure</li>
        <li>Works with both public and private repositories</li>
        <li>Expand the diagram component for a brief explanation</li>
      </ul>
      <h3 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Enter your repository link below and click <strong>Generate</strong> to see your project's structure!
      </h3>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter repository link (e.g. https://github.com/user/repo)"
          value={repoLink}
          onChange={(e) => setRepoLink(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      {loading && (
        <div style={{ marginTop: "3rem"}}>
          <h2 style={{color: "var(--gh-green)", fontWeight: "bold"}}>Generating...</h2>
        </div>
        )}
    </div>
  );
}