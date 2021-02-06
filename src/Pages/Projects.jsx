import React from "react";
import {Redirect} from "react-router-dom";
import Nav from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import "./projects.scss";
import Cards from "../Components/cards/ProjectCards";
import Robot from "../Components/Projects/robot/Robot";
import Employee from "../Components/Projects/employeePortal/Employee";
import CenterPointOne from "../Components/Projects/centerPointOne/CenterPointOne";

class Projects extends React.Component{
    renderComponent(){
        switch(this.props.match.params.projectComponent){
            case 'collection':
                return <Cards/>;
            case 'maze-solving-robot':
                return <Robot/>;
            case 'employee-portal':
                return <Employee/>;
            case 'centerPointEnergy-fall19':
                return <CenterPointOne/>;
            default:
                return <Redirect to='/'/>;
        }
    }

    render(){
        return(
            <div className="Projects">
                <div className="Projects-Header">
                    <Nav/>
                </div>
                <div className="Projects-Body">
                    {this.renderComponent()}
                </div>
                <div className="Projects-Footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Projects;