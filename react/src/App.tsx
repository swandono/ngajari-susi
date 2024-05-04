import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { NavBar } from "./container/navbar";
import { Content } from "./pages/content";
import { Post } from "./pages/post";

// Homepage -> statis
// Profile ->
// Kepengurusan
// Inventaris
// Kontak
// Login
// Kegiatan

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/content/:susi" element={<Content />} />
        <Route path="/post/:page" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
