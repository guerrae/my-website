import React, {useState} from "react";
import GameSqrs from "./GameSqrs";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./TicTacToeGame.scss";

//Materail UI swap default colors function
const useStyles = makeStyles({
    button: {
      backgroundColor: 'black',
      color: 'white',
      '&:hover': {
          backgroundColor: '#FFD700',
          color: 'black'
      }
    }
});

function TicTacToeGame(){
    const classes = useStyles();//Material UI swap defalt colors call function
    const [userNotice, setUserNotice] = useState("");
    const [curTurns, setCurTurns] = useState(0);
    const [gameBoard, setGameBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [boardColor, setBoardColor] = useState(["Gold", "Gold", "Gold", "Gold", "Gold", "Gold", "Gold", "Gold", "Gold"]);

    //Game Play for Tic-Tac-Toe
    function GamePlay(val){
        if(userPlacement(val))
            systemPlacement();
    }

    //user makes his move
    function userPlacement(val){
        //user sets "X"
        if(gameBoard[val] === "")
            gameBoard[val]="X";
        else if(gameBoard[val] !== "")
            return false;

        //update the gameBoard array and check for win
        setGameBoard([...gameBoard]);
        setCurTurns(curTurns + 1);
        if(checkStat("X")){
            setUserNotice("You Won!")
            return false;
        }
        return true;
    }

    //system makes random move
    function systemPlacement(){
        //look for an empty board piece
        var randTemp = getRandomInt(), count = 0;
        while(gameBoard[randTemp] !== "" && count !== 9){
            randTemp = getRandomInt();
            count++;
        }

        //Place an "O" in the empty board piece
        if(count !== 9)
            gameBoard[randTemp] = "O";

        //update the gameBoard array and check for loss or Draw
        setGameBoard([...gameBoard]);
        if(checkStat("O"))
            setUserNotice("You Lost!");
        else if(curTurns === 4)
            setUserNotice("Draw");
    }

    //Restart game by setting arry to null
    function restartGame(){
        for(var i=0; i<9; i++){
            gameBoard[i] = "";
            boardColor[i] = "Gold";
        }
        setUserNotice("");
        setCurTurns(0);
        setGameBoard([...gameBoard]);
        setBoardColor([...boardColor]);
    }

    //retreive a random number from 0-9
    function getRandomInt() {
        return Math.floor(Math.random() * 9);
    }

    //Check if user or won or lost
    function checkStat(symbolType){
        var color, stat = false;
        (symbolType === "X") ? color = "Green-Win" : color = "Red-Loss";

        if(gameBoard[0] === symbolType && gameBoard[1] === symbolType && gameBoard[2] === symbolType){
            boardColor[0] = boardColor[1] = boardColor[2] = color;
            stat = true;
        }
        else if(gameBoard[3] === symbolType && gameBoard[4] === symbolType && gameBoard[5] === symbolType){
            boardColor[3] = boardColor[4] = boardColor[5] = color;
            stat = true;
        }
        else if(gameBoard[6] === symbolType && gameBoard[7] === symbolType && gameBoard[8] === symbolType){
            boardColor[6] = boardColor[7] = boardColor[8] = color; 
            stat = true;
        }
        else if(gameBoard[0] === symbolType && gameBoard[3] === symbolType && gameBoard[6] === symbolType){
            boardColor[0] = boardColor[3] = boardColor[6] = color; 
            stat = true;
        }
        else if(gameBoard[1] === symbolType && gameBoard[4] === symbolType && gameBoard[7] === symbolType){
            boardColor[1] = boardColor[4] = boardColor[7] = color; 
            stat = true;
        }
        else if(gameBoard[2] === symbolType && gameBoard[5] === symbolType && gameBoard[8] === symbolType){
            boardColor[2] = boardColor[5] = boardColor[8] = color; 
            stat = true;
        }
        else if(gameBoard[0] === symbolType && gameBoard[4] === symbolType && gameBoard[8] === symbolType){
            boardColor[0] = boardColor[4] = boardColor[8] = color; 
            stat = true;
        }
        else if(gameBoard[2] === symbolType && gameBoard[4] === symbolType && gameBoard[6] === symbolType){
            boardColor[2] = boardColor[4] = boardColor[6] = color; 
            stat = true;
        }
        else
            return stat;

        setBoardColor([...boardColor]);
        return stat;
    }

    return <div>
        <div className="TicTac-Status">{userNotice}</div>
        <div className="TicTac-Board">
            <div className="TicTac-Grid-Container"> 
                {gameBoard.map((item, index) => (
                    <div onClick={() => GamePlay(index)} key={index}><GameSqrs type={gameBoard[index]} typeColor={boardColor[index]}/></div>
                ))}
            </div>
        </div>
        <div className="TicTac-Button"><Button onClick={restartGame} className={classes.button}>Restart Game</Button></div>
    </div>
}
export default TicTacToeGame;