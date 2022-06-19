/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
 const GameStateEnum = {
    START: 0,
    PLAYING: 1,
    GAMEOVER: 2,
    HIGHSCORE: 3
};


/*
export const defaultHighScorePeriod = 14;

/**
 * 
 * @param {GameStateEnum} stateEnum 
 * @param {Int} period 
 * @param {GameStateEnum} nextStateEnum 
 * @param {Array<string>} skipKeys 
 */
/*
export const CreateGameState = (stateEnum, period, nextStateEnum, skipKeys=[]) => {
    GoToNextState

    nextState isOver

    return {
        stateEnum: stateEnum,
        period: period,
        nextStateEnum: nextStateEnum
    }

}
*/
export class GameState{
    constructor(model, stateEnum, period=-1, nextStateEnum=-1, skipKeys=[]){
        if (stateEnum === nextStateEnum){
            console.warn('stateEnum and nextStateEnum are the same values! are you sure you want this?');
        }

        //this.model;

        this.stateEnum = stateEnum;
        this.period = period;
        this.nextStateEnum = nextStateEnum;
        this.skipKeys = skipKeys;
        this.cumuTime = 0;

        this.callback = null;
    }

    nextStateCallbackWrapper = () => {
        
    }

    /**
     * 
     * @param {Float} timeDelta must be in seconds, not milliseconds!
     */
    update = (timeDelta) => {
        this.cumuTime += timeDelta;
    }

    reset(){
        this.cumuTime = 0;
    }

    autonomousNext(){
        if (this.cumuTime >= this.period){
            this.nextStateCallbackWrapper();
        }
    }

    onPress(){
        if (skipKeys !== [] && this.nextStateEnum){
            this.nextStateCallbackWrapper();
        }
    }

    handleNext(){
        if (this.period > 0 && this.nextStateEnum){
            this.nextStateCallbackWrapper();
        }
    }
}


export const defaultStartState = CreateGameState(0, 10, 3, ["Space"]);
export const defaultHighScoreState = CreateGameState(3, defaultHighScorePeriod, 1, ["Space"]);
export const defaultPlayingState = CreateGameState(1, 0, 2);
export const defaultGameOverState = CreateGameState(2, 10, 3);