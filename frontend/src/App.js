import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Login from "./pages/login";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Components/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/login" element={<Layout><Login /> </Layout>} />
        </Routes>
    )
}

export default App;
