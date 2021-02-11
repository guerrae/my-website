import React, {Component} from 'react';
import cnpTwoImg1 from '../../../logos/projects/cnp20_1.png';
import cnpTwoImg2 from '../../../logos/projects/cnp20_2.png';
import cnpTwoImg3 from '../../../logos/projects/cnp20_3.png';
import cnpTwoImg4 from '../../../logos/projects/cnp20_4.png';
import cnpTwoImg5 from '../../../logos/projects/cnp20_5.png';
import cnpTwoImg6 from '../../../logos/projects/cnp20_6.png';
import cnpTwoImg7 from '../../../logos/projects/cnp20_7.png';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './centerPointTwo.scss';

const cnpOneImgs = [
    cnpTwoImg2,
    cnpTwoImg3,
    cnpTwoImg4,
    cnpTwoImg5,
    cnpTwoImg6,
    cnpTwoImg7,
]

class CenterPointOne extends Component{
    state = {currentImg: 0, automateSlide: 12000}

    handlePrev = () => {
        if(this.state.currentImg >= 1)
            this.setState({currentImg: this.state.currentImg - 1});
        else
            this.setState({currentImg: 5});
    }

    handleNext = () => {
        if(this.state.currentImg <= 4)
            this.setState({currentImg: this.state.currentImg + 1});
        else
            this.setState({currentImg: 0});
    }

    componentDidMount = () => {
        setInterval(this.handleNext, this.state.automateSlide);
    }

    render(){
        return(
            <div className="cnpTwo">
                {/*Main Heding*/}
                <h1 className="cnpTwo-h-one">CenterPoint Energy</h1>

                {/*Main Image*/}
                <img className="cnpTwo-img" src={cnpTwoImg1} alt="cnpTwo-pic"/>

                {/*First Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', marginBottom: 0}}>The Project</h3>
                <p className="cnpTwo-p">
                    For my second co-op opportunity with CenterPoint Energy I worked remotely and under the Distribution 
                    Projects & Lighting Design department. I had the opportunity to work on new projects and I had the 
                    privilege once again to work with my former team members who were excited to have me back. Below are 
                    images from a PowerPoint slide showing the work I did for CenterPoint Energy. 
                </p>

                {/*Image Slider*/}
                <div className="cnpTwo-slider">
                    <ArrowBackIosRoundedIcon className="cnpTwo-arrow-left" fontSize="large" onClick={this.handlePrev}/>
                    <div className="cnpTwo-silder-img">
                        {cnpOneImgs.map((singleImg, index) =>{
                            return(
                                <div className={this.state.currentImg === index ? 'cnpTwo-slider-fadeIn' : 'cnpTwo-slider-fadeOut'} key={index}>
                                    {this.state.currentImg === index && <img className="cnpTwo-img2" src={singleImg} alt="cnpTwo-pic"/>}
                                </div>
                            )
                        })}
                    </div>
                    <ArrowForwardIosRoundedIcon className="cnpTwo-arrow-right" fontSize="large" onClick={this.handleNext}/>
                </div>
                
                {/*Second Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', margin: 0}}>The Results</h3>
                <p className="cnpTwo-p">
                    The first project I worked on saw the team waiting hours for Excel to produce crucial data from a set of 
                    formulas entered. The total number of data points where so large and the formals too complex that it caused 
                    excel to run sluggish. I solved the issue by creating a program using VBA (Visual Basic for Applications) that 
                    would take the values in the Excel field and run its own calculation using the same formulas. The results where 
                    phenomenal, the program was able to compute these values within seconds satisfying all the personnel.
                    <br/><br/>
                    The requirements for the second project was to provide users with a program that would download multiple Excel 
                    files from the internet easily and seamlessly. To achieve this goal, I designed my app using an Excel macro as 
                    my web scraping tool. Once completed the users would enter the dates of the files they wish to download followed 
                    by pressing the enter button and the files would be stored immediately on their local machine.
                    <br/><br/>
                    For my final project I was tasked with developing a program that would store SAP information and allow the user 
                    to export the queried data to Excel and generate automatic emails. I design the application using VBA 
                    (Visual Basic for Applications) as my front-end and I used SQL as my database to store the SAP data the user uploaded. 
                    App navigation is quick and easy, and all user were able to perform the tasks they requested.
                </p>

                {/*Information Card*/}
                <div className="cnpTwo-info">
                    <div className="cnpTwo-column">
                        <h6>ROLE</h6>
                        <ul>Computer Engineer Co-Op</ul>
                        <h6>YEAR</h6>
                        <ul>2020</ul>
                        <h6>CLIENT</h6>
                        <ul>CenterPoint Energy</ul>
                        <h6>DEPARTMENT</h6>
                        <ul>Distribution Projects & Lighting Design</ul>
                    </div>
                    <div className="cnpTwo-column">
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