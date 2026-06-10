import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";

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
      
      </BrowserRouter>
    </>
  );
}

export default App;