import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { getRandomInRange } from "../utils";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

const commentDate = (date) =>
  date.toLocaleString("en", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

export const Comment = ({ comment, deleteComment }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt={comment.fullName}
          src={`https://robohash.org/doloribusautiure.png?size=300x300&set=set${getRandomInRange(
            1,
            5
          )}`}
        />
      </ListItemAvatar>
      <ListItemText
        primary={comment.fullName}
        secondary={
          <>
            <Typography sx={{ display: "block" }} component="span">
              {comment.text}
            </Typography>
            {commentDate(comment.createdAt)}
          </>
        }
      />
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => {
            deleteComment(comment.fullName, comment.createdAt);
          }}
        >
          Delete
        </Button>
      </Stack>
    </ListItem>
  );
};

export default Comment;
