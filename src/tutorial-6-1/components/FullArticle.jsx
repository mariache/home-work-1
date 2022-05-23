import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { posts } from "../test-data/posts";

export const FullArticle = () => {
  const { id } = useParams();

  const currentPost = posts.find((post) => post.id === Number(id));

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
