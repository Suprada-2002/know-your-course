import "./App.css";
import "./style.scss";
import "./media-query.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";

//routes
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AddEdit from "./pages/AddEdit";
import NotFound from "./pages/Notfound";
import About from "./pages/About";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import { auth } from "./firebase";

function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };

  return (
    <div className="App">
      <Header
        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
      <ToastContainer position="top-center" />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home setActive={setActive} user={user} />}
        />
        <Route path="/detail/:id" element={<Detail setActive={setActive} />} />
        <Route
          path="/create"
          element={
            user?.uid ? (
              <AddEdit user={user} setActive={setActive} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/update/:id"
          element={
            user?.uid ? (
              <AddEdit user={user} setActive={setActive} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth setActive={setActive} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
