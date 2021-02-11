import React, {Component} from 'react';
import cnpOneImg1 from '../../../logos/projects/cnp19_1.png';
import cnpOneImg2 from '../../../logos/projects/cnp19_2.png';
import cnpOneImg3 from '../../../logos/projects/cnp19_3.png';
import cnpOneImg4 from '../../../logos/projects/cnp19_4.png';
import cnpOneImg5 from '../../../logos/projects/cnp19_5.png';
import cnpOneImg6 from '../../../logos/projects/cnp19_6.png';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './centerPointOne.scss';

const cnpOneImgs = [
    cnpOneImg2,
    cnpOneImg3,
    cnpOneImg4,
    cnpOneImg5,
    cnpOneImg6,
]

class CenterPointOne extends Component{
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
            <div className="cnpOne">
                {/*Main Heding*/}
                <h1 className="cnpOne-h-one">CenterPoint Energy</h1>

                {/*Main Image*/}
                <img className="cnpOne-img" src={cnpOneImg1} alt="cnpOne-pic"/>

                {/*First Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', marginBottom: 0}}>The Project</h3>
                <p className="cnpOne-p">
                    During my first co-op opportunity with CenterPoint Energy I was given the freedom to work for different departments. 
                    This provided me with distinct challenges all with their own unique solutions. I also had the privilege of meeting 
                    and working with exceptional people who helped me achieve my goals and from whom I learned a lot from. Below are 
                    images from a PowerPoint slide showing the work I did for CenterPoint Energy. 
                </p>

                {/*Image Slider*/}
                <div className="cnpOne-slider">
                    <ArrowBackIosRoundedIcon className="cnpOne-arrow-left" fontSize="large" onClick={this.handlePrev}/>
                    <div className="cnpOne-silder-img">
                        {cnpOneImgs.map((singleImg, index) =>{
                            return(
                                <div className={this.state.currentImg === index ? 'cnpOne-slider-fadeIn' : 'cnpOne-slider-fadeOut'} key={index}>
                                    {this.state.currentImg === index && <img className="cnpOne-img2" src={singleImg} alt="cnpOne-pic"/>}
                                </div>
                            )
                        })}
                    </div>
                    <ArrowForwardIosRoundedIcon className="cnpOne-arrow-right" fontSize="large" onClick={this.handleNext}/>
                </div>
                
                {/*Second Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', margin: 0}}>The Results</h3>
                <p className="cnpOne-p">
                    Under the Pole Attachments Department, I was tasked with finding a solution that would facilitate the storage 
                    of information and allowed the personnel to easily search and modify this data. To complete the project, I 
                    created the back-end and the front-end using VBA (Visual Basic for Applications) and SQL to request data from 
                    the database. This allowed me to provide an easy to use interface and a flexible program that allowed the personnel 
                    to quickly find the requested information. The program also included the ability to automatically generate emails 
                    further facilitating the ease of use for the personnel. 
                    <br/><br/>
                    The second project under the Reliability Consulting Department required that a single report be generated at the 
                    start of every month from a collection of sub-reports. To accomplish this, I again used SQL and VBA to pull the 
                    necessary information from the collection of multiple reports. All the information would then be stored in a single 
                    report with appropriate formatting and highlights to make it easy to read and printable.   
                    <br/><br/>
                    The final project under the Asset Management Department had me generate survival curves for different assets that 
                    the company owned. For this I implemented the Weibull formulas to help me predict the life expectancy of these 
                    various assets. I then used Microsoft Excel to generate the shape of the curve which allowed for easier visualization.
                </p>

                {/*Information Card*/}
                <div className="cnpOne-info">
                    <div className="cnpOne-column">
                        <h6>ROLE</h6>
                        <ul>Computer Engineer Co-Op</ul>
                        <h6>YEAR</h6>
                        <ul>2019</ul>
                        <h6>CLIENT</h6>
                        <ul>CenterPoint Energy</ul>
                        <h6>DEPARTMENT</h6>
                        <ul>Asset Planning Optimization</ul>
                    </div>
                    <div className="cnpOne-column">
                        <h6>Manager</h6>
                        <ul>Arodi Gonzalez</ul>
                        <h6>DELIVERABLES</h6>
                        <ul>Software Development</ul>
                        <ul>Front-End</ul>
                        <ul>Back-End</ul>
                        <ul>UI/UX</ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default CenterPointOne;