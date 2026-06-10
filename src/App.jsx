import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/roadmap"
          element={<Roadmap />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;