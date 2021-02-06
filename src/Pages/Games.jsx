import React from "react";
import {Redirect} from "react-router-dom";
import Nav from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import "./games.scss";
import Cards from "../Components/cards/GameCards";
import SnakeGame from "../Components/Games/snake/SnakeGame";

class Games extends React.Component{
    renderComponent(){
        switch(this.props.match.params.gameComponent){
            case 'collection':
                return <Cards/>;
            case 'snake-game':
                return <SnakeGame/>;
            default:
                return <Redirect to='/'/>;
        }
    }

    render(){
        return(
            <div className="Games">
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