import Button from "../components/common/Button";
import TextInputField from "../components/common/TextInputField";
import FlexBox from "../components/common/FlexBox/FlexBox";

const Form = () => {
  const value = {
    email: "",
    password: "",
  };

  const handleInputChange = (event) => {
    value[event.target.name] = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!value.email.trim() || !value.password.trim()) {
      alert("Заполните все поля");
    } else {
      console.log(value);
      value.email = "";
      value.password = "";
      event.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FlexBox style={{ width: 240 }}>
        <TextInputField
          type="text"
          placeholder="E-Mail"
          name="email"
          onChange={handleInputChange}
        />
        <TextInputField
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleInputChange}
        />
        <FlexBox>
          <Button
            type="submit"
            direction="horizontal"
            justifyContent="start"
            style={{ width: 66, height: 28 }}
            text="Войти"
          />
        </FlexBox>
      </FlexBox>
    </form>
  );
};

export default Form;
