import React from "react";
import { HighScore } from "./highScoreView";

export function highScoreEnhancer(){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {};
            this.myRef = React.createRef();
        }

        getNextStateKey = () => {
            return this.props.nextStateKey ? this.props.nextStateKey : "Space";
        }

        componentDidMount(){
            this.myRef.current.focus();
        }

        render(){
            const highScoreTime = this.highScoreTime;
            const highScores = this.state.highScores;
        
            let numToShow = Math.min(8, Math.floor(highScoreTime / this.state.period));
        
            const components = [];
        
            for (let i = 0; i < numToShow; i += 1) {
              components.push(
                <HighScore name={highScores[i][0]} score={highScores[i][1]} />
              );
            }

            return {

            }
        }
    }
}