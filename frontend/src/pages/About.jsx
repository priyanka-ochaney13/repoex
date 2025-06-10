export default function About() {
    return (
        <div className="about-container">
            <h2>About RepoX</h2>
            <p>
                <strong>RepoX</strong> is a modern web application inspired by GitHub’s design and workflow.
                It allows users to explore, manage, and interact with repositories in a clean, intuitive interface.
            </p>
            <ul>
                <li>🔍 Browse public and private repositories</li>
                <li>🔒 Secure access to your private data</li>
            </ul>
            <p>
                View the source code on{' '}
                <a
                    href="https://github.com/priyanka-ochaney13/repoex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    GitHub
                </a>
                .
            </p>
        </div>
    );
}