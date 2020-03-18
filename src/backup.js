let myobj = [
  {
    id: 1,
    score: 2,
    jokeTxt: "aaaaaaaaa"
  },
  {
    id: 2,
    score: 9,
    jokeTxt: "bbbbbbbbbbb"
  },
  {
    id: 3,
    score: 12,
    jokeTxt: "ccccccccccccccc"
  },
  {
    id: 4,
    score: -44,
    jokeTxt: "dddddddddddddd"
  }
];

function loadJokes2(numJokes) {
  let jokeArr = [];
  let jokeIDsArr = [];
  let jokesLoaded = 0;

  while (jokesLoaded < numJokes) {
    const { id, joke } = await this.fetchJoke();
    const jokeIDs = [...this.state.jokeIDs];

    if (!jokeIDs.includes(id)) {
      jokeArr.push(joke);
      jokeIDsArr.push(id);
      jokesLoaded++;
    }
  }

  this.setState(st => {
    return {
      jokes: [...st.jokes, ...jokeArr],
      jokeIDs: [...st.jokeIDs, ...jokeIDsArr]
    };
  });
}