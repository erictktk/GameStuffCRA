import { render } from "@testing-library/react";
import React from "react";

export function Tasha(props){
    return <div>Hi!</div>
}

export default class ManualGameTester extends React.Component {
    constructor(props){
        super(props);
        this.state = {};

        
        this.frameRate = 60;
        this.timeDelta = 1000./this.frameRate;
        this.interval = null;
        this.cumuTime = 0;

        this.myRef = React.createRef();
    }

    getKey = () => {
        const key = this.props.key ? this.props.key : "F9";
        return key;
    }

    getSkipKey = () => {
        const skipKey = this.props.skipKey ? this.props.skipKey : "F10";
        return skipKey;
    }

    update = () => {
        this.cumuTime += this.timeDelta;
        if (this.props.printUpdate){
            console.log('update Called');
        }

        this.forceUpdate();
    }

    componentDidMount(){
        this.myRef.current.focus();
    }

    onKeyDown = (e) => {
        //console.log(e.key);
        if (e.key === this.getKey()){
            this.interval = setInterval( ()=>this.update(), this.timeDelta );
        }

    }
    onKeyUp = (e) => {
        if (e.key === this.getKey()){
            clearInterval(this.interval); //is this even necessary
            this.interval = null;
            
        }
    }

    onKeyPress = (e) => {
        console.log(e);
        if (e.key.toLowerCase() === this.getSkipKey()){
            for(let i = 0; i < 5; i += 1){
                this.update();
            }
        }
    }

    render(){
        //const key = this.getKey();
        //console.log(key);


        return(
            <div ref={this.myRef} onKeyPress={e=>this.onKeyPress(e)} onKeyDown={(e)=>{this.onKeyDown(e);}} tabIndex={0}>
                Press F9 or F10 here! 
            </div>
        );
    }
}