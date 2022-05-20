import { Home } from "./pages/Home.jsx";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { FullArticle } from "./components/FullArticle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { CustomRoute } from "./components/CustomRoute.jsx";

function App() {
  const { pathname } = window.location;
  const postId = pathname.split("/post/")[1];

  return (
    <>
      <Header />
      <CustomRoute path="/" element={<Home />} exact />
      <CustomRoute path="/about" element={<About />} />
      <CustomRoute path="/login" element={<h1>Логин</h1>} />
      <CustomRoute path="/post/" element={<FullArticle id={postId} />} />
      <Footer />
    </>
  );
}

export default App;
