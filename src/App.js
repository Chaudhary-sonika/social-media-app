import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Explore } from "./pages/Explore/Explore";
import { Bookmark } from "./pages/Bookmark/Bookmark";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import { Sidebar } from "./components/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Mockman from "mockman-js";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { RequireAuth } from "./components/RequireAuth";
import { Navbar } from "./components/Navbar";
import { PostDetails } from "./pages/PostDetail/PostDetails";
function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={1500} />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<Sidebar />}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/explore"
            element={
              <RequireAuth>
                <Explore />
              </RequireAuth>
            }
          />
          <Route
            path="/bookmark"
            element={
              <RequireAuth>
                <Bookmark />
              </RequireAuth>
            }
          />
          <Route
            path="/userprofile/:username"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/post/:postId"
            element={
              <RequireAuth>
                <PostDetails />
              </RequireAuth>
            }
          />
        </Route>

        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
