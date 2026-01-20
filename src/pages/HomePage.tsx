import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="page-container">
            <h1>Below is the list of projects</h1>
            <div className="project-list">
                <li>
                    <ol>
                        <Link to="/toggle-grid">Toggle Grid</Link>
                    </ol>
                </li>
            </div>
        </div>
    )
}

export default HomePage;