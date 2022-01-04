import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const localStorageData = localStorage.getItem("comments");

  const initialCartState = localStorageData ? JSON.parse(localStorageData) : [];

  const [comments, setComments] = useState(initialCartState);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return { comments, setComments };
};
