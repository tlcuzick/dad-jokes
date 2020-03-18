import React from "react";

import "./JokeScore.css";

class JokeScore extends React.Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote(evt) {
    this.props.vote(this.props.id, 1);
  }

  downVote(evt) {
    this.props.vote(this.props.id, -1);
  }

  render() {
    const { score, borderColor } = this.props;

    let borderTxt = `5px solid ${borderColor}`;
    let styleObj = { border: borderTxt };

    return (
      <div className="JokeScore">
        <i className="far fa-thumbs-up" onClick={this.upVote} />
        <span className="JokeScore-counter" style={styleObj}>
          {score}
        </span>
        <i className="far fa-thumbs-down" onClick={this.downVote} />
      </div>
    );
  }
}

export default JokeScore;
