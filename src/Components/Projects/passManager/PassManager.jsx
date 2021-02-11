import React, {Component} from 'react';
import passManagerImg1 from '../../../logos/temp_img.jpg';
//import passManagerImg2 from '../../../logos/temp_img.jpg';
//import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
//import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './passManager.scss';

/*slider images
const robotImgs = [
    passManagerImg2,
    passManagerImg1,
]
*/

class PassManager extends Component{
    /*slider images
    state = {currentImg: 0, automateSlide: 12000}

    handlePrev = () => {
        if(this.state.currentImg >= 1)
            this.setState({currentImg: this.state.currentImg - 1});
        else
            this.setState({currentImg: 1});
    }

    handleNext = () => {
        if(this.state.currentImg <= 0)
            this.setState({currentImg: this.state.currentImg + 1});
        else
            this.setState({currentImg: 0});
    }

    componentDidMount = () => {
        setInterval(this.handleNext, this.state.automateSlide);
    }
    */

    render(){
        return(
            <div className="passManager">
                {/*Main Heding*/}
                <h1 className="passManager-h-one">Password Manager</h1>

                {/*Main Image*/}
                <img className="passManager-img" src={passManagerImg1} alt="passManager-pic"/>

                {/*First Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', marginBottom: 0}}>The Project</h3>
                <p className="passManager-p">
                    The password manager project is currently in development. Its purpose is to store all user passwords to 
                    multiple websites and encrypting them using AES-256 for ultimate protection. The best part is this 
                    application will store passwords locally on the user’s machine. Which means that users will no longer 
                    worry about the cloud being compromised. Currently the project is being developed with Python as the 
                    back-end, SQLite as the database, and KivyMD for a responsive and robust user interface.
                </p>

                {/*Image Slider*/}
                {/*
                    <div className="passManager-slider">
                        <ArrowBackIosRoundedIcon className="passManager-arrow-left" fontSize="large" onClick={this.handlePrev}/>
                        <div className="passManager-silder-img">
                            {robotImgs.map((singleImg, index) =>{
                                return(
                                    <div className={this.state.currentImg === index ? 'passManager-slider-fadeIn' : 'passManager-slider-fadeOut'} key={index}>
                                        {this.state.currentImg === index && <img className="passManager-img2" src={singleImg} alt="passManager-pic"/>}
                                    </div>
                                )
                            })}
                        </div>
                        <ArrowForwardIosRoundedIcon className="passManager-arrow-right" fontSize="large" onClick={this.handleNext}/>
                    </div>*
                /}
                
                {/*Second Paragraph with Heding*/}
                {/*
                <h3 style={{fontFamily: 'Roboto Slab', margin: 0}}>The Results</h3>
                <p className="passManager-p">
                    The other stuff. 
                </p>
                */}

                {/*Information Card*/}
                <div className="passManager-info">
                    <div className="passManager-column">
                        <h6>ROLE</h6>
                        <ul>Computer Engineer</ul>
                        <h6>YEAR</h6>
                        <ul>2021</ul>
                        <h6>CLIENT</h6>
                        <ul>Personal Project</ul>
                    </div>
                    <div className="passManager-column">
                        <h6>DELIVERABLES</h6>
                        <ul>Software Development</ul>
                        <ul>Front-End</ul>
                        <ul>Back-End</ul>
                        <ul>Authentication</ul>
                        <ul>UI/UX</ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default PassManager;