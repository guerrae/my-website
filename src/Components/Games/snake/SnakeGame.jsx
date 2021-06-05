import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Modal from "react-modal";
import {FormControlLabel, Radio, RadioGroup, Button, FormLabel, withStyles} from '@material-ui/core';
import snakeHead from "../../../logos/games/snake_head.png";
import snakeHead1 from "../../../logos/games/snake_head1.png";
import snakeFood from "../../../logos/games/snakeFood.png";
import './snakeGame.scss';

Modal.setAppElement('#root');//prevents warnings

const useStyles = (theme =>({//Styles reconfigured for the Material UI components
    button: {
        margin: theme.spacing(1),
        color: theme.palette.primary.main = "white",
        backgroundColor: theme.palette.primary.main = "#000000",

        "&:hover":{
            color: theme.palette.primary.main = "#000000",
            backgroundColor: theme.palette.primary.main = "#2ecc70",
        },
    },
    formLabel: {
        color: "black",
    },
    radio: {
        color: "black",
        "&.Mui-checked":{
            color: "#2ecc70",
            "&:hover":{
                backgroundColor: "rgb(46, 204, 112, 0.10)",
            }
        },
        "&:hover":{
            color: "#2ecc70",
            backgroundColor: "rgb(46, 204, 112, 0.10)",
        },
    },
}))

const getLocation = () => {//Get a random x and y for the snake food
    let min = 0;
    let max = 96;
    let x = Math.floor((Math.random() * (max - min + 1) + min)/2)*2;
    let y = Math.floor((Math.random() * (max - min + 1) + min)/2)*2;
    return [x,y];
}

const newGame = {//reset all variables back to default
    snakeBody:[//[x,y]
        [0,0],[2,0]
    ],
    snakeFood: getLocation(),
    direction: 'RIGHT',
    speed: '',
    modalOpen: false,
}

class Snake extends Component{
    state = newGame;

    componentDidMount = () => {//Mount the snake when page loads
        this.timer = this.setSpeed('100');
        document.addEventListener("keydown", this.handleKeyPress);
    }
    
    componentWillUnmount = () => {//Unmount the keyboard listener
        document.removeEventListener("keydown", this.handleKeyPress);
    }
    
    componentDidUpdate = () => {//At every change check snake and food status
        if(this.state.modalOpen === false){
            this.borderCheck();
            this.snakeBreaks();
            this.eatFood();
        }
    }
    
    stopTimer = () => {//Clear the timer so we can add a new speed
        clearInterval(this.timer);
    }
    
    setSpeed = (newSpeed) => {//Set a new speed for the snake
        this.timer = setInterval(this.snakeMove, newSpeed);
    }

    snakeMove = () => {//move the snake by modifiying the head
        let body = [...this.state.snakeBody];
        let snakeHead = body[body.length - 1];

        switch(this.state.direction){
            case 'LEFT':
                snakeHead = [snakeHead[0]-2, snakeHead[1]];
                break;
            case 'UP':
                snakeHead = [snakeHead[0], snakeHead[1]-2];
                break;
            case 'RIGHT':
                snakeHead = [snakeHead[0]+2, snakeHead[1]];
                break;
            case 'DOWN':
                snakeHead = [snakeHead[0], snakeHead[1]+2];
                break;
            default:
                break;
        }
        
        body.push(snakeHead);
        body.shift();
        this.setState({snakeBody: body});
    }

    borderCheck = () => {//see if snake hit the border if so game over
        let snakeHead = this.state.snakeBody[this.state.snakeBody.length - 1];

        if(snakeHead[0] > 97 || snakeHead[0] < 0 || snakeHead[1] > 97 || snakeHead[1] < 0 )
            this.setState({modalOpen: true});//this.restartGame();
    }

    snakeBreaks = () => {//see if snake hit it-self if so game over
        let body = [...this.state.snakeBody];
        let snakeHead = body[body.length - 1];
        body.pop();
        body.forEach(subBody => {
            if(snakeHead[0] === subBody[0] && snakeHead[1] === subBody[1])
                this.setState({modalOpen: true});//this.restartGame();
        })
    }

    eatFood = () => {//check if snake ate the food based on food and snake head location
        let snakeHead = this.state.snakeBody[this.state.snakeBody.length - 1];

        if(snakeHead[0] === this.state.snakeFood[0] && snakeHead[1] === this.state.snakeFood[1]){
            this.addSnakeBody();
            this.resetFood();
        }
    }

    addSnakeBody = () => {//if snake ate food then add body to snake array
        let body = [...this.state.snakeBody];
        body.unshift([]);
        this.setState({snakeBody: body});
    }

    resetFood = () => {//if food was eaten create new food at random location
        this.setState({snakeFood: getLocation()});
    }

    restartGame = () => {//restart game
        this.setState(newGame);
    }

    handleKeyPress = (e) => {//see what key was pressed
        if(e.keyCode === 37)
            this.setState({direction: 'LEFT'})
        else if(e.keyCode === 38)
            this.setState({direction: 'UP'})
        else if(e.keyCode === 39)
            this.setState({direction: 'RIGHT'})
        else if(e.keyCode === 40)
            this.setState({direction: 'DOWN'})
    }

    handleDifficutly = (e) => {//set the speed of snake based on user input
        this.setState({speed: e.target.value});
        this.stopTimer();//stop timer before speed reset
        this.setSpeed(e.target.value);
    }

    render(){
        const {classes} = this.props;//variable to use modified Material UI styles
        return(
            <div className="Snake-Game-Board">
                {/* Display the snake body and move it accordint to user input */}
                {this.state.snakeBody.map((body, i) =>{
                    const style = {
                        top: `${body[1]}%`,
                        left: `${body[0]}%`,
                    }
                    if(this.state.modalOpen === false){
                        if(i===this.state.snakeBody.length-1){
                            if(i%2)
                                return(<img className="snake-head" key={i} style={style} src={snakeHead} alt="snake-body"/>);
                            else
                                return(<img className="snake-head" key={i} style={style} src={snakeHead1} alt="snake-body"/>);
                        }
                        else if(i===0 && (this.state.direction === 'LEFT' || this.state.direction === 'RIGHT'))
                            return(<div className="snake-tail-one" key={i} style={style}/>)
                        else if(i===0 && (this.state.direction === 'UP' || this.state.direction === 'DOWN'))
                            return(<div className="snake-tail-two" key={i} style={style}/>)
                        else
                            return(<div className="snake-body" key={i} style={style}/>)
                    }
                    else
                        return(<div className="snake-invisible" key={i} style={style}/>)
                })}

                {/* Randomly Display the snake food and reset after user aquires it */}
                <img className="snake-food" src={snakeFood} style={{top: `${this.state.snakeFood[1]}%`, left: `${this.state.snakeFood[0]}%`}} alt="snake-food"/>
                
                {/* Display the game over box and allow user to restart game and select difficulty or exit the game */}
                <Modal isOpen={this.state.modalOpen}
                    style={{
                        overlay: {backgroundColor: 'rgba(48, 48, 48, 0.75)', zIndex: '1'},
                        content: {
                            width: '25%',
                            height: '45%',
                            margin: 'auto',
                            border: '1px solid #ccc',
                            background: '#f5f8ff',
                            overflow: 'auto',
                            //WebkitOverflowScrolling: 'touch',
                            borderRadius: '5px',
                            outline: 'none',
                            padding: '30px'
                        }
                    }}>
                    <h1 className="SnakeModal-One" style={{textAlign: 'center'}}>Game Over</h1>
                    <h2 className="SnakeModal-Two" style={{textAlign: 'center'}}>SCORE: {this.state.snakeBody.length-2}</h2>
                    
                    <FormLabel className={classes.formLabel}>Select your difficulty</FormLabel>
                    <RadioGroup aria-label="snakeSpeed" name="snakeSpeed1" value={this.state.speed} onChange={this.handleDifficutly}>
                        <FormControlLabel value='100' control={<Radio className={classes.radio}/>} label="Easy" />
                        <FormControlLabel value='50' control={<Radio className={classes.radio}/>} label="Medium" />
                        <FormControlLabel value='25' control={<Radio className={classes.radio}/>} label="Hard" />
                        <FormControlLabel value='1' control={<Radio className={classes.radio}/>} label="Imposible" />
                    </RadioGroup>
                    
                    <div className="SnakeModal-Button">
                        <Button onClick={() => this.restartGame()} className={classes.button}>Restart Game</Button>
                        <Button component={Link} to={"/games/collection"} className={classes.button}>EXIT</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default withStyles(useStyles) (Snake);