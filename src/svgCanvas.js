import React from "react";
import Vector from "eric-vector";
import * as RandomWrapper from "eric-random-wrapper";

//const vec = new Vector(0,0);

/**
 * @interface
 */
function CameraTransform(){
    //
}

CameraTransform.propotype.cameraTransform = function(){
    throw new Error('not implemented!');
}

export function ColorGen(arr, choices, randomWrapper){
    
}

export function GeneratorXYEntity(xRange, yRange, func, num, randomWrapper=null){
    const rWrapper = new RandomWrapper.RandomWrapper();

    const x = rWrapper.randInt(xRange[0], xRange[1]);
    const y = rWrapper.randInt(yRange[0], yRange[1]);
}

/*
export class EntityManager{
    constructor(){

    }
    //
}*/

export function SVGRing(props){
    const x = props.x;
    const y = props.y;
    const radius = props.radius;

    const offset = props.offset;
    
    const strokeWidth = props.strokeWidth;
    const color = props.color ? props.color : [228, 246, 248, .7];
    const className = props.className ? props.className : "null-class";

    let actualX = x + offset.x;
    let actualY = y + offset.y; 

    return (
        <circle 
            cx={actualX} cy={actualY} 
            r={radius} className={className} 
            color={color} fillOpacity={0}
            strokeWidth={strokeWidth}
        />
    );
}

export function SVGSolidCircle(props){
    const x = props.x;
    const y = props.y;
    const radius = props.radius;

    const offset = props.offset;
    
    const color = props.color ? props.color : [228, 246, 248, .7];
    const className = props.className ? props.className : "null-class";

    let actualX = x + offset.x;
    let actualY = y + offset.y; 

    return (
        <circle 
            cx={actualX} cy={actualY} 
            r={radius} className={className} 
            color={color} strokeOpacity={0}
        />
    );
}

export default class SVGCanvas extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    getPanningVector = () => {
        const dampening = this.props.dampeningCoeff;
        const cameraPos = this.props.camera.position;

        return new Vector(-dampening*cameraPos.x, -dampening*cameraPos.y);
    }


    render(){
        const panningVector = this.getPanningVector();
        
        
        /** @type{Array<PositionEntity>} */
        const entities = this.props.entities;

        for(let i=0; i < entities.length; i += 1){
            const position = entities.
            entities.cameraPosition = Vector.subtract(entities.position, this.props.camera.position);
        }

        return (

        );
    }
    
    render2(){
        const panningVector = this.getPanningVector();

        /**
         * @type {Array<CameraTransform>}
         */
        const stuff = this.props.stuff;

        for(let i = 0; i < stuff.length; i += 1){
            stuff[i].cameraTransform(panningVector);
        }

        //simple

        const components = [];
        for(let i = 0; i < stuff.length; i += 1){
            //
        }

        return(
            <div></div>
        )
    }
}