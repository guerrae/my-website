import React from "react";
import {Redirect} from "react-router-dom";
import Nav from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import {Helmet} from "react-helmet";
import "./games.scss";
import Cards from "../Components/cards/GameCards";
import TicTacToe from "../Components/Games/TicTacToe/TicTacToeGame";
import SnakeGame from "../Components/Games/snake/SnakeGame";

class Games extends React.Component{
    renderComponent(){
        switch(this.props.match.params.gameComponent){
            case 'collection':
                return <Cards/>;
            case 'tictactoe-game':
                return <TicTacToe/>;
            case 'snake-game':
                return <SnakeGame/>;
            default:
                return <Redirect to='/'/>;
        }
    }

    render(){
        return(
            <div className="Games">
                <Helmet><title>Efrain Guerra | Games</title></Helmet>
                <div className="Games-Header">
                    <Nav/>
                </div>
                <div className="Games-Body">
                    {this.renderComponent()}
                </div>
                <div className="Games-Footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Games;