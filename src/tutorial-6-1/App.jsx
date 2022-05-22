import { Home } from "./pages/Home.jsx";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { FullArticle } from "./components/FullArticle";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const postId = pathname.split("/post/")[1];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<h1>Логин</h1>} />
        <Route path="/post/:id" element={<FullArticle id={postId} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
