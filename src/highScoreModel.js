
const myHighScores = [
    //type out your high scores here! in descending order!
];

const highScores = [
  ["EJT", 1000000],
  ["ALB", 900000],
  ["GJT", 880000],
  ["JJB", 850000],
  ["GUY", 800000],
  ["SAS", 780000],
  ["BUD", 770000],
  ["CKE", 750000]
];


/**
 * 
 * @returns Array<Array>
 */
export function GetInitHighScores(){
    if (myHighScores.length !== 0){
        return myHighScores;
    }
    else{
        return highScores;
    }
}

/**
 * Will init high scores to default highscores if myHighScores.length === 0!
 */
export class HighScoresState{
    constructor(){
        const initHighScores = GetInitHighScores();
        /**
         * @type {Array<Array>}
         */
        this.highScores = this._deepCopy(initHighScores);
    }

    _deepCopy(iHS){
        return iHS.map( hs => [hs[0], hs[1]]);
    }

    // 1000, 900, 800   820

    /**
     * 
     * @param {*} score 
     * @returns Int
     */
    storeNewHighScoreLocal(initials, score){
        
        const count = this.highScores.length;
        let index = count;
        for(let i = count-1; i >= 0; i -= 1){
            const curVal = this.highScores[i];
            if (score >= curVal){
                index = i;
                continue;
            }
            else {
                break;
            }
        }

        if (index === count){
            return 0;
        }
        else{
            this.highScores.splice(index, 0, [initials, score]);
            this.highScores.slice(0, count);

            return 1;
        }
    }
}