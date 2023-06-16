import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Bookmark } from "./pages/Bookmark";
import { UserProfile } from "./pages/UserProfile";
function App() {
  return (
    <div className="App">
      <h1>Hello...</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
