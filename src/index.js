import React from "react";
import ReactDOM from "react-dom";

import JokeList from "./JokeList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <JokeList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//App component:
////sidebar with "new jokes" button
////JokeList component

//JokeList component
////List of Joke components

//Joke Component
////JokeScore component
////Joke text
////Dynamic emoji

//JokeScore component
////thumbs up FA icon
////thumbs down FA icon
////Net score display
