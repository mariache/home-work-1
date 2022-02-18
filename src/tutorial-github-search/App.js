import "./styles.css";
import axios from "axios";

import { UserCard } from "./UserCard";
import { SearchForm } from "./SearchForm";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState();
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${searchWord}`
      );
      const data = await response.data;
      if (response.status === 200) {
        setLoading(false);
        setUser(data);
      } else {
        throw Error("Something went wrong...");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div id="app">
      <div className="app-container">
        <SearchForm
          getUser={getUser}
          searchWord={searchWord}
          setSearchWord={setSearchWord}
        />
        <UserCard user={user} searchWord={searchWord} loading={loading} />
      </div>
    </div>
  );
}
