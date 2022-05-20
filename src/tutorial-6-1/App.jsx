import { Home } from "./pages/Home.jsx";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { FullArticle } from "./components/FullArticle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const { pathname } = window.location;
  const postId = pathname.split("/post/")[1];

  return (
    <>
      <Header />
      {pathname === "/" && <Home />}
      {pathname === "/about" && <About />}
      {pathname === "/login" && <h1>Логин</h1>}
      {postId && <FullArticle id={postId} />}
      <Footer />
    </>
  );
}

export default App;
