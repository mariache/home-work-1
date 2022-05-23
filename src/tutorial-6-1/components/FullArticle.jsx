import { useEffect } from "react";

import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { posts } from "../test-data/posts";
import { NotFound } from "../pages/404";

export const FullArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  });

  const currentPost = posts.find((post) => post.id === Number(id));

  if (!currentPost) return <NotFound />;

  return (
    <div className="full-post">
      <h1>{currentPost.title}</h1>

      <img src={currentPost.imageUrl} alt="Article" />
      <p>{currentPost.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
