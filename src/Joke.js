import React from "react";

import JokeScore from "./JokeScore";

import "./Joke.css";

class Joke extends React.Component {
  render() {
    const { score, joke, id, vote } = this.props;
    let smileyHex;
    let borderColor;

    if (score >= 10) {
      smileyHex = "😆";
      borderColor = "green";
    } else if (score >= 7) {
      smileyHex = "😂";
      borderColor = "blue";
    } else if (score >= 3) {
      smileyHex = "😄";
      borderColor = "yellow";
    } else if (score >= 0) {
      smileyHex = "😐";
      borderColor = "orange";
    } else {
      smileyHex = "😭";
      borderColor = "red";
    }

    return (
      <div className="Joke">
        <JokeScore
          score={score}
          borderColor={borderColor}
          id={id}
          vote={vote}
        />
        <span className="Joke-txt">{joke}</span>
        <span role="img" className="Joke-emoji">
          {smileyHex}
        </span>
      </div>
    );
  }
}

export default Joke;
