import React, {Component} from 'react';
import employeeImg1 from '../../../logos/projects/employee1.png';
import employeeImg2 from '../../../logos/projects/employee2.png';
import employeeImg3 from '../../../logos/projects/employee3.png';
import employeeImg4 from '../../../logos/projects/employee4.png';
import employeeImg5 from '../../../logos/projects/employee5.png';
import employeeImg6 from '../../../logos/projects/employee6.png';
import employeeImg7 from '../../../logos/projects/employee7.png';
import employeeImg8 from '../../../logos/projects/employee8.png';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './employee.scss';

const employeeImgs = [
    employeeImg2,
    employeeImg3,
    employeeImg4,
    employeeImg5,
    employeeImg6,
    employeeImg7,
    employeeImg8,
]

class Employee extends Component{
    state = {currentImg: 0, automateSlide: 12000}

    handlePrev = () => {
        if(this.state.currentImg >= 1)
            this.setState({currentImg: this.state.currentImg - 1});
        else
            this.setState({currentImg: 6});
    }

    handleNext = () => {
        if(this.state.currentImg <= 5)
            this.setState({currentImg: this.state.currentImg + 1});
        else
            this.setState({currentImg: 0});
    }

    componentDidMount = () => {
        setInterval(this.handleNext, this.state.automateSlide);
    }

    render(){
        return(
            <div className="employee">
                {/*Main Heding*/}
                <h1 className="employee-h-one">Employee Portal</h1>

                {/*Main Image*/}
                <img className="employee-img" src={employeeImg1} alt="employee-pic"/>

                {/*First Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', marginBottom: 0}}>The Project</h3>
                <p className="employee-p">
                    This project is intended to facilitate employee access to a web portal and allow them to complete 
                    administrative functions. This web portal is designed to provide login authentication for all users. 
                    Every user will be verified and will be granted access to only their appropriate department links. 
                    The app is efficient and easy to use with all functionality readily available. Below are screenshots 
                    of the final product and a live demo can be accessed &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://guerrae.github.io/SoftwareEngineering-Employee_Portal/">here</a>. 
                </p>

                {/*Image Slider*/}
                <div className="employee-slider">
                    <ArrowBackIosRoundedIcon className="employee-arrow-left" fontSize="large" onClick={this.handlePrev}/>
                    <div className="employee-silder-img">
                        {employeeImgs.map((singleImg, index) =>{
                            return(
                                <div className={this.state.currentImg === index ? 'employee-slider-fadeIn' : 'employee-slider-fadeOut'} key={index}>
                                    {this.state.currentImg === index && <img className="employee-img2" src={singleImg} alt="employee-pic"/>}
                                </div>
                            )
                        })}
                    </div>
                    <ArrowForwardIosRoundedIcon className="employee-arrow-right" fontSize="large" onClick={this.handleNext}/>
                </div>
                
                {/*Second Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', margin: 0}}>The Results</h3>
                <p className="employee-p">
                    All users on the employee network can create an account, they can then use this account to login to 
                    their respective departments. When a user logs in, their credentials are authenticated, once logged 
                    in each individual user will have a role. This role will be used by the back end to identify what the 
                    user can and can’t access through the web portal. Once a user’s role has been processed all accessible 
                    links will be displayed and the user will be able to navigate to these links. If a user does not possess 
                    access to a specific role then the system will hide all links and render them inaccessible.
                </p>

                {/*Information Card*/}
                <div className="employee-info">
                    <div className="employee-column">
                        <h6>ROLE</h6>
                        <ul>Computer Engineer</ul>
                        <h6>YEAR</h6>
                        <ul>2020</ul>
                        <h6>CLIENT</h6>
                        <ul>Dr.Raj Singh</ul>
                        <ul>UH Professor</ul>
                    </div>
                    <div className="employee-column">
                        <h6>DELIVERABLES</h6>
                        <ul>Software Development</ul>
                        <ul>Front-End</ul>
                        <ul>Back-End</ul>
                        <ul>Authentication</ul>
                        <h6>WEB</h6>
                        <ul>
                            <a target="_blank" rel="noopener noreferrer" 
                            href="https://github.com/guerrae/SoftwareEngineering-Employee_Portal/tree/master">
                                GitHub
                            </a>
                        </ul>
                        <ul>
                            <a target="_blank" rel="noopener noreferrer" 
                            href="https://guerrae.github.io/SoftwareEngineering-Employee_Portal/">
                                Live Demo
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Employee;