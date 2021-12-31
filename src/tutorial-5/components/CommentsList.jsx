import * as React from "react";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Comment } from "./Comment";

export const CommentsList = ({ comments, deleteComment }) => {
  return (
    <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
      <Typography variant="h5" component="div">
        Отзывы:
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {comments.map((comment) => (
          <Comment
            key={`${comment.fullName}-${comment.createdAt.toString()}`}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </List>
    </Paper>
  );
};
