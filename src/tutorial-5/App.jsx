import React from "react";
import { CommentsList } from "./components/CommentsList";
import { CommentForm } from "./components/CommentForm";
import Paper from "@mui/material/Paper";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { EmptyBlock } from "../tutorial-4/components/EmptyBlock";
import Box from "@mui/material/Box";

const App = () => {
  const { comments, setComments } = useLocalStorage();

  const deleteComment = (fullName, createdAt) => {
    setComments(
      comments.filter(
        (comment) =>
          comment.fullName !== fullName &&
          comment.createdAt.getTime() !== createdAt.getTime()
      )
    );
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        alignContent: "center",
      }}
    >
      <Box sx={{ width: "360px" }}>
        {comments.length > 0 ? (
          <CommentsList comments={comments} deleteComment={deleteComment} />
        ) : (
          <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
            <EmptyBlock
              heading="Комментариев нет..."
              secondaryText="Чтобы оставить комментарий, заполните форму нижу"
            />
          </Paper>
        )}
        <CommentForm setComments={setComments} />
      </Box>
    </Box>
  );
};

export default App;
