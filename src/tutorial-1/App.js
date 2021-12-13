// import Profile from "./components/functionalComponents/Profile";
import Profile from "./components/classComponents/Profile";

const App = () => {
  return <Profile name="Вася Пупкин" registeredAt={new Date(2021, 5, 22)} />;
};

export default App;
