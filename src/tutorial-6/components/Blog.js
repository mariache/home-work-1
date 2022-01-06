import { Row, Col } from "react-bootstrap";
import CustomNavbar from "./layout/CustomNavbar";
import CustomFooter from "./layout/CustomFooter";
import About from "./layout/About";
import Article from "./common/Article";
import BlogCard from "./common/BlogCard";

export default () => {
  const { pathname } = window.location;

  const parsedUrl = pathname.split("/").filter((item) => item);

  return (
    <div className="App">
      <CustomNavbar />
      {pathname === "/" && (
        <Row xs={1} md={3} className="g-4">
          <Col>
            <BlogCard />
          </Col>
        </Row>
      )}
      {parsedUrl[0] === "post" && <Article id={parsedUrl[1]} />}
      {pathname === "/about" && <About />}
      <br />
      <CustomFooter />
    </div>
  );
};

