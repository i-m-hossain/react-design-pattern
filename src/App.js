import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs";
import Home from "./components/Home";

function App() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
            </Routes>
        </>
    );
}

export default App;
