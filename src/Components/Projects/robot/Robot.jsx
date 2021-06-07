import React, {Component} from 'react';
import robotImg1 from '../../../logos/projects/robot/robot1.jpg';
import robotImg2 from '../../../logos/projects/robot/robot2.jpg';
import robotImg3 from '../../../logos/projects/robot/robot3.jpg';
import robotImg4 from '../../../logos/projects/robot/robot4.jpg';
import robotImg5 from '../../../logos/projects/robot/robot5.jpg';
import robotImg6 from '../../../logos/projects/robot/robot6.jpg';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './robot.scss';

const robotImgs = [
    robotImg2,
    robotImg3,
    robotImg4,
    robotImg5,
    robotImg6,
]

class Robot extends Component{
    state = {currentImg: 0, automateSlide: 12000}

    handlePrev = () => {
        if(this.state.currentImg >= 1)
            this.setState({currentImg: this.state.currentImg - 1});
        else
            this.setState({currentImg: 4});
    }

    handleNext = () => {
        if(this.state.currentImg <= 3)
            this.setState({currentImg: this.state.currentImg + 1});
        else
            this.setState({currentImg: 0});
    }

    componentDidMount = () => {
        setInterval(this.handleNext, this.state.automateSlide);
    }

    render(){
        return(
            <div className="robot">
                {/*Main Heding*/}
                <h1 className="robot-h-one">Autonomous Robot</h1>

                {/*Main Image*/}
                <img className="robot-img" src={robotImg1} alt="robot-pic"/>

                {/*First Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', marginBottom: 0}}>The Project</h3>
                <p className="robot-p">
                    The autonomous robot project was designed to help us learn about embedded 
                    systems and software development. I was tasked to build, design and code a 
                    robot that could solve a maze and avoid obstacles using different types of 
                    electrical components. The electrical components used include: DC Motors, 
                    Distance Sensors, Bluetooth Module, and a Reflectance Sensor. I used the &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.ti.com/tool/EK-TM4C123GXL">Tiva C EK-TM4C123GXL</a>
                    &nbsp; microcontroller from Texas Instruments as the heart of 
                    the robot. The code was written using the C language and it was debugged 
                    using Code Composer Studios the official IDE from Texas Instruments. The 
                    slide show below demonstrates the robot’s progression as it was being assembled.
                </p>

                {/*Image Slider*/}
                <div className="robot-slider">
                    <ArrowBackIosRoundedIcon className="robot-arrow-left" fontSize="large" onClick={this.handlePrev}/>
                    <div className="robot-silder-img">
                        {robotImgs.map((singleImg, index) =>{
                            return(
                                <div className={this.state.currentImg === index ? 'robot-slider-fadeIn' : 'robot-slider-fadeOut'} key={index}>
                                    {this.state.currentImg === index && <img className="robot-img2" src={singleImg} alt="robot-pic"/>}
                                </div>
                            )
                        })}
                    </div>
                    <ArrowForwardIosRoundedIcon className="robot-arrow-right" fontSize="large" onClick={this.handleNext}/>
                </div>
                
                {/*Second Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', margin: 0}}>The Results</h3>
                <p className="robot-p">
                    After assembly and coding was finalized the robot was put to the test. Once 
                    powered ON, the robot was able to maintain its course and avoid all obstacles. 
                    This allowed the robot to solve a maze by detecting walls in its line of sight 
                    and altering its course accordingly. This process continued until the robot 
                    crossed the finish line at which point it stopped all its motor functions. The 
                    entire process was done completely autonomous. Check out code and videos for 
                    the autonomous robot, links below.
                </p>

                {/*Information Card*/}
                <div className="robot-info">
                    <div className="robot-column">
                        <h6>ROLE</h6>
                        <ul>Computer Engineer</ul>
                        <h6>YEAR</h6>
                        <ul>2020</ul>
                        <h6>CLIENT</h6>
                        <ul>Dr.Hung Le</ul>
                        <ul>UH Professor</ul>
                    </div>
                    <div className="robot-column">
                        <h6>DELIVERABLES</h6>
                        <ul>Software Development</ul>
                        <ul>RTOS Implementation</ul>
                        <ul>Hardware Assembly</ul>
                        <ul>Data Acquisition</ul>
                        <h6>WEB</h6>
                        <ul><a target="_blank" rel="noopener noreferrer" href="https://github.com/guerrae/Autonomous-Robot">GitHub</a></ul>
                        <ul>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PL39K2eqHjM5sDfIpc2ObBuHCzkdGksAZp">YouTube</a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Robot;