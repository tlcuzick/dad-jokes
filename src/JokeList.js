import React from "react";

import Joke from "./Joke";

import "./JokeList.css";

import axios from "axios";

class JokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      jokeIDs: [],
      isLoading: false
    };
    this.fetchJoke = this.fetchJoke.bind(this);
    this.loadJokes = this.loadJokes.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.vote = this.vote.bind(this);
  }

  async fetchJoke() {
    const url = "https://icanhazdadjoke.com/";
    let response = await axios.get(url, {
      headers: {
        Accept: "application/json"
      }
    });

    let { id, joke } = response["data"];

    return { id: id, joke: joke, score: 0 };
  }

  async loadJokes(numJokes) {
    let jokeIDs = [...this.state.jokeIDs];
    let jokesArr = [];
    let jokeIDsArr = [];
    let jokesLoaded = 0;

    while (jokesLoaded < numJokes) {
      this.setState({ isLoading: true });

      let joke = await this.fetchJoke();

      if (!jokeIDs.includes(joke.id)) {
        jokesArr.push(joke);
        jokeIDsArr.push(joke.id);
        jokesLoaded++;
      }
    }

    this.setState(st => ({
      jokes: [...st.jokes, ...jokesArr],
      jokeIDs: [...st.jokeIDs, ...jokeIDsArr],
      isLoading: false
    }));
  }

  handleClick(evt) {
    this.loadJokes(3);
  }

  vote(id, increment) {
    this.setState(st => {
      let updatedJokes = st.jokes.map(joke => {
        if (joke.id === id) {
          return Object.assign(joke, { score: joke.score + increment });
        } else {
          return joke;
        }
      });
      return { jokes: updatedJokes };
    });
  }

  componentDidMount() {
    this.loadJokes(5);
  }

  render() {
    const sortedJokes = this.state.jokes.sort((a, b) =>
      a.score < b.score ? 1 : -1
    );
    const jokes = sortedJokes.map(j => {
      const { id, score, joke } = j;
      return (
        <Joke key={id} id={id} score={score} joke={joke} vote={this.vote} />
      );
    });

    const spinner = <i className="far fa-grin-squint fa-9x JokeList-spinner" />;

    const content = this.state.isLoading ? (
      <div className="JokeList-spinner-frame">
        {spinner}
        <h1>Loading...</h1>
      </div>
    ) : (
      <div className="JokeList-list">{jokes}</div>
    );

    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <span role="img" className="JokeList-emoji">
            😆
          </span>
          <button className="JokeList-button" onClick={this.handleClick}>
            Fetch Jokes!
          </button>
        </div>
        {content}
      </div>
    );
  }
}

export default JokeList;
