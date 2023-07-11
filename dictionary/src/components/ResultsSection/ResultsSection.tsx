import React from "react";
import type { SearchedWordData } from "../../types/SearchedWordData";

const ResultsSection: React.FC<SearchedWordData> = ({
  word,
  meanings,
  phonetics,
}) => {
  return (
    <>
      <h2>{word}</h2>
      <div className="phonetics">
        {phonetics.map((elem, idx) => (
          <React.Fragment key={idx}>
            <h3>{elem.text}</h3>
            <audio src={elem.audio} controls>
              Your browser does not support audio element
            </audio>
          </React.Fragment>
        ))}
      </div>
      <div className="meanings">
        <h3>Definition: </h3>
        {meanings.map((item, idx) => (
          <React.Fragment key={idx}>
            <h4>As {item.partOfSpeech}</h4>
            <ul>
              {meanings[idx].definitions.map((item, idx) => (
                <li>{item.definition}</li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ResultsSection;

{
  /* <p>{item.definitions[0].definition}</p> */
}
