import React, { Component } from 'react';
import './snakeGame.scss';

const getLocation = () => {
    let min = 0;
    let max = 96;
    let x = Math.floor((Math.random() * (max - min + 1) + min)/2)*2;
    let y = Math.floor((Math.random() * (max - min + 1) + min)/2)*2;
    return [x,y];
}

const newGame = {
    snakeBody:[//[x,y]
        [0,0],[2,0]
    ],
    snakeFood: getLocation(),
    direction: 'RIGHT',
    count: 0,
    speed: 200,
}

class Snake extends Component{
    state = newGame;

    componentDidMount = () => {
        setInterval(this.snakeMove, this.state.speed);
        document.addEventListener("keydown", this.handleKeyPress)
    }

    componentWillUnmount = () => {
        document.removeEventListener("keydown", this.handleKeyPress)
    }

    componentDidUpdate = () => {
        this.borderCheck();
        this.snakeBreaks();
        this.eatFood();
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

    borderCheck = () => {//see if snake hit the border if so restart
        let snakeHead = this.state.snakeBody[this.state.snakeBody.length - 1];

        if(snakeHead[0] > 98 || snakeHead[0] < 0 || snakeHead[1] > 98 || snakeHead[1] < 0 )
            this.restartGame();
    }

    snakeBreaks = () => {//see if snake hit it-self if so restart
        let body = [...this.state.snakeBody];
        let snakeHead = body[body.length - 1];
        body.pop();
        body.forEach(subBody => {
            if(snakeHead[0] === subBody[0] && snakeHead[1] === subBody[1])
                this.restartGame();
        })
    }

    eatFood = () => {
        let snakeHead = this.state.snakeBody[this.state.snakeBody.length - 1];

        if(snakeHead[0] === this.state.snakeFood[0] && snakeHead[1] === this.state.snakeFood[1]){
            this.addSnakeBody();
            this.resetFood();
        }
    }

    addSnakeBody = () => {
        let body = [...this.state.snakeBody];
        body.unshift([]);
        this.setState({snakeBody: body});
    }

    resetFood = () => {
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

    render(){
        return(
            <div className="Snake-Game-Board">
                {this.state.snakeBody.map((body, i) =>{
                    const style = {
                        top: `${body[1]}%`,
                        left: `${body[0]}%`,
                    }
                    return(<div className="snake-body" key={i} style={style}></div>)
                })}

                <div className="snake-food" style={{top: `${this.state.snakeFood[1]}%`, left: `${this.state.snakeFood[0]}%`}}/>
            </div>
        )
    }
}
export default Snake;