import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="header">
      <Link to="/">React Blog</Link>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link to="/" active={pathname === "/"} as={Link}>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/about" active={pathname === "/about"} as={Link}>
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/login" active={pathname === "/login"} as={Link}>
            Войти
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
