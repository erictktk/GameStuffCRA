import React from "react";
import "./highscores.css";
import { backgroundsrc } from "./backgroundsrc.png";




export const HighScore = (props) => {
  const name = props.name;
  const score = props.score;
  const string = name + "     " + score;
  return (
    <div style={{ padding: "3px" }}>
      {props.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.score}
    </div>
  );
};

export class HighScoreView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highScores: highScores,
      timeElapsed: 0,
      period: 1
    };
  }

  render() {
    const highScoreTime = this.props.model.highScoreTime;
    const highScores = this.state.highScores;

    let numToShow = Math.min(8, Math.floor(highScoreTime / this.state.period));

    const components = [];

    for (let i = 0; i < numToShow; i += 1) {
      components.push(
        <HighScore name={highScores[i][0]} score={highScores[i][1]} />
      );
    }

    let quickStyle = { display: "flex", flexDirection: "column" };
    quickStyle = {};

    return (
      <>
        <div id="game-container">
          <div id="high-scores">
            HIGH SCORES:
            <br />
            <br />
            <div style={quickStyle}>{components}</div>
          </div>
          <svg id="svg-element"></svg>

          <div id="pixel-art-canvas">
            <img
              className="background"
              src={require("./backgroundsrc.png")}
              alt="background"
            />
          </div>
        </div>
      </>
    );
  }
}