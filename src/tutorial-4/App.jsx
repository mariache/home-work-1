import React from "react";
import { EmptyBlock } from "./components/EmptyBlock";
import { PhrasesList } from "./components/PhrasesList";
import { adjectivesArr } from "./mocks/adjectives";
import { nounsArr } from "./mocks/nouns";
import { getRandomArrElem } from "./utils";
import "./App.css";

const App = () => {
  const [phrases, setPhrases] = React.useState([]);
  const handleGeneratePhrase = (adjectives, nouns) => {
    const firstAdj = getRandomArrElem(adjectives);
    const secondAdj = getRandomArrElem(adjectives);
    const noun = getRandomArrElem(nouns);
    const newPhrase = `${firstAdj} ${secondAdj} ${noun}`;

    setPhrases((prev) => [newPhrase, ...prev]);
  };
  return (
    <div className="wrapper">
      {phrases.length > 0 ? (
        <PhrasesList phrasesArr={phrases} />
      ) : (
        <EmptyBlock />
      )}
      <button
        className="btn btn_generate"
        onClick={() => handleGeneratePhrase(adjectivesArr, nounsArr)}
      >
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={() => setPhrases([])}>
        Очистить
      </button>
    </div>
  );
};

export default App;
