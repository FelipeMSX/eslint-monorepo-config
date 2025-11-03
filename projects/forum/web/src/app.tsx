import "./global.css";

import { Routes, Route, Link } from "react-router-dom";

import About from "./pages/about/page";

function App() {
    return (
        <div>
            <nav>
                <Link to="/about">About</Link> |
            </nav>
            <Routes>
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
