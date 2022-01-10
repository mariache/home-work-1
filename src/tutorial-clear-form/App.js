import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./styles.css";

const emptyFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  about: "",
};

const App = () => {
  const { handleSubmit, register, formState, reset } = useForm();

  const onSubmit = (values) => {
    console.log("ФОРМА!", values);
    reset(emptyFormFields);
  };

  console.log(formState.errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => reset(emptyFormFields)}
    >
      <div className="App">
        <div className="row">
          <TextField
            name="firstName"
            label="Имя"
            {...register("firstName", {
              validate: (value) => value !== "admin" || "Nice try!",
            })}
            helperText={
              formState.errors.firstName && formState.errors.firstName.message
            }
            error={!!formState.errors.firstName}
            fullWidth
          />
          <TextField
            name="lastName"
            label="Фамилия"
            {...register("lastName", {
              required: "Это обязательное поле!",
            })}
            helperText={
              formState.errors.lastName && formState.errors.lastName.message
            }
            error={!!formState.errors.lastName}
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                message: "Это неверная почта!",
              },
            })}
            helperText={
              formState.errors.email && formState.errors.email.message
            }
            error={!!formState.errors.email}
            name="email"
            label="E-Mail"
            defaultValue=""
            fullWidth
          />
          <TextField
            {...register("password", {
              required: "Это обязательное поле!",
            })}
            helperText={
              formState.errors.password && formState.errors.password.message
            }
            error={!!formState.errors.password}
            name="password"
            type="password"
            label="Пароль"
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            name="about"
            label="Обо мне"
            fullWidth
            {...register("about")}
          />
        </div>
        <br />
        <div className="row">
          <Button type="submit" variant="contained" color="primary">
            Зарегистрироваться
          </Button>
          <Button type="reset" variant="contained" color="secondary">
            Очистить
          </Button>
        </div>
      </div>
    </form>
  );
};

export default App;
