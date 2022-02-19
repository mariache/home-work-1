import search from "./assets/img/search.svg";

export const SearchForm = ({ searchWord, setSearchWord, getUser, loading }) => {
  const onChange = (event) => {
    setSearchWord(event.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    setSearchWord("");

    getUser();
  };

  return (
    <form className="app-form">
      <input
        onChange={onChange}
        value={searchWord}
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
        style={{ backgroundImage: `url(${search})` }}
      />
      <button
        onClick={onClick}
        disabled={loading || !searchWord}
        className="app-form_btn"
      >
        Найти
      </button>
    </form>
  );
};
