import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const emptyComment = {
  fullName: "",
  email: "",
  text: "",
};

export const CommentForm = ({ setComments }) => {
  const [comment, setComment] = React.useState(emptyComment);

  const { fullName, email, text } = comment;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullName?.trim() || !email?.trim() || !text?.trim()) {
      alert("Заполните все поля");
    } else {
      setComments((prev) => [
        {
          fullName,
          email,
          createdAt: new Date(),
          text,
        },
        ...prev,
      ]);
      setComment(emptyComment);
    }
  };

  const onChange = (event) => {
    setComment((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  return (
    <Paper
      variant="outlined"
      sx={{ p: 2, display: "flex", alignItems: "center" }}
    >
      <Stack
        component="form"
        sx={{
          width: "100%",
        }}
        spacing={2}
        autoComplete="off"
      >
        <TextField
          onChange={onChange}
          id="outlined-basic"
          value={comment.fullName}
          name="fullName"
          required
          label="Имя"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          value={comment.email}
          onChange={onChange}
          required
          name="email"
          label="Почта"
          variant="outlined"
        />
        <TextField
          value={comment.text}
          id="outlined-multiline-static"
          onChange={onChange}
          required
          label="Текст..."
          name="text"
          multiline
          rows={4}
        />
        <Button onClick={handleSubmit} type="submit" variant="contained">
          Отправить
        </Button>
      </Stack>
    </Paper>
  );
};
