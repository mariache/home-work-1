import React from "react";
import { Phrase } from "./Phrase";

export const PhrasesList = ({ phrasesArr }) => {
  return (
    <div className="list">
      {phrasesArr.map((phrase) => (
        <Phrase key={phrase} text={phrase} />
      ))}
    </div>
  );
};
