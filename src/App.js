import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./features/chat/Chat";
import Sidebar from "./features/sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="route-container">
          <Routes>
            <Route path="/" element={<Chat></Chat>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
