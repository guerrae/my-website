import React from "react";
import {Redirect} from "react-router-dom";
import Nav from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import {Helmet} from "react-helmet";
import "./projects.scss";
import Cards from "../Components/cards/ProjectCards";
import Robot from "../Components/Projects/robot/Robot";
import Employee from "../Components/Projects/employeePortal/Employee";
import CenterPointOne from "../Components/Projects/centerPointOne/CenterPointOne";
import CenterPointTwo from "../Components/Projects/centerPointTwo/CenterPointTwo";
import Mirror from "../Components/Projects/mirror/Mirror";
import PassManager from "../Components/Projects/passManager/PassManager";

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
            case 'centerpoint-summer20':
                return <CenterPointTwo/>;
            case 'smart-mirror':
                return <Mirror/>;
            case 'password-manager':
                return <PassManager/>;
            default:
                return <Redirect to='/'/>;
        }
    }

    render(){
        return(
            <div className="Projects">
                <Helmet><title>Efrain Guerra | Projects</title></Helmet>
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