import React, {Component} from 'react';
import mirrorImg1 from '../../../logos/projects/smartMirror/smartMirror1.jpg';
import mirrorImg2 from '../../../logos/projects/smartMirror/smartMirror2.jpg';
import mirrorImg3 from '../../../logos/projects/smartMirror/smartMirror3.jpg';
import mirrorImg4 from '../../../logos/projects/smartMirror/smartMirror4.jpg';
import mirrorImg5 from '../../../logos/projects/smartMirror/smartMirror5.jpg';
import mirrorImg6 from '../../../logos/projects/smartMirror/smartMirror6.jpg';
import mirrorImg7 from '../../../logos/projects/smartMirror/smartMirror7.jpg';
import mirrorImg8 from '../../../logos/projects/smartMirror/smartMirror8.jpg';
import mirrorImg9 from '../../../logos/projects/smartMirror/smartMirror9.jpg';
import mirrorImg10 from '../../../logos/projects/smartMirror/smartMirror10.jpg';
import mirrorImg11 from '../../../logos/projects/smartMirror/smartMirror11.jpg';
import mirrorImg12 from '../../../logos/projects/smartMirror/smartMirror12.jpg';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './mirror.scss';

const robotImgs = [
    mirrorImg2,
    mirrorImg3,
    mirrorImg4,
    mirrorImg5,
    mirrorImg6,
    mirrorImg7,
    mirrorImg8,
    mirrorImg9,
    mirrorImg10,
    mirrorImg11,
]

class Mirror extends Component{
    state = {currentImg: 0, automateSlide: 12000}

    handlePrev = () => {
        if(this.state.currentImg >= 1)
            this.setState({currentImg: this.state.currentImg - 1});
        else
            this.setState({currentImg: 9});
    }

    handleNext = () => {
        if(this.state.currentImg <= 8)
            this.setState({currentImg: this.state.currentImg + 1});
        else
            this.setState({currentImg: 0});
    }

    componentDidMount = () => {
        setInterval(this.handleNext, this.state.automateSlide);
    }

    render(){
        return(
            <div className="mirror">
                {/*Main Heding*/}
                <h1 className="mirror-h-one">Smart Mirror</h1>

                {/*Main Image*/}
                <img className="mirror-img" src={mirrorImg1} alt="mirror-pic"/>

                {/*First Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', marginBottom: 0}}>The Project</h3>
                <p className="mirror-p">
                    In today’s world, technology continues to grow more complex as new gadgets and devices flood the market. Information 
                    is in abundance on the internet and is readily available from devices such as our smartphones, tablets, and computers. 
                    However, oftentimes it requires tedious steps for users to access this information since it is across several different 
                    applications, websites, and interfaces. By jumping back and forth through apps and websites, time is wasted by the user. 
                    With this in mind, we’re constructing our project, the Smart Mirror. In this project we are aiming towards a device 
                    that seamlessly integrates into our daily routines without any additional effort. By not requiring the user to physically 
                    interact with several different application or websites, our Smart Mirror will instead display the desired personalized 
                    information at a glance.
                </p>

                {/*Image Slider*/}
                <div className="mirror-slider">
                    <ArrowBackIosRoundedIcon className="mirror-arrow-left" fontSize="large" onClick={this.handlePrev}/>
                    <div className="mirror-silder-img">
                        {robotImgs.map((singleImg, index) =>{
                            return(
                                <div className={this.state.currentImg === index ? 'mirror-slider-fadeIn' : 'mirror-slider-fadeOut'} key={index}>
                                    {this.state.currentImg === index && <img className="mirror-img2" src={singleImg} alt="mirror-pic"/>}
                                </div>
                            )
                        })}
                    </div>
                    <ArrowForwardIosRoundedIcon className="mirror-arrow-right" fontSize="large" onClick={this.handleNext}/>
                </div>
                
                {/*Second Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', margin: 0}}>The Results</h3>
                <p className="mirror-p">
                    The Smart Mirror project was a success. We accomplished all our goals and managed to stay below the budget, but most 
                    importantly all our features worked as expected. Users are able to easily navigate through the software by using their 
                    voice or by gesturing with their hands. The voice navigation is possible thanks to the addition of the Google Assistant 
                    API which allows our users to ask any question and hear the reply through the on-board speaker. The addition of the Grove 
                    Gesture sensor to our hardware gave our team the ability to provide our users with an alternative way to navigate the 
                    software without touching the mirror. the sensor is capable of recognizing different gestures and for each gesture we 
                    arranged the mirror to display a specific application. For example, when a user performs the “UP” gesture they will be 
                    presented with the stock tracking application. Similarly, if the user performs the “DOWN” gesture they will be presented 
                    with Google Maps application that will show them a traffic map of their current location as well as drive times to 
                    pre-selected locations such as work or school. The Smart Mirror is also capable of mirroring the user’s phone, this allows 
                    the user to share content such as images, videos and other items that can be shared to the mirror for others to see. Finally, 
                    I would like to thank our professor Dr. Litvinov for his guidance and advice as well as my team for their contributions 
                    towards the Smart Mirror project and for the successful accomplishment of our goals.<br/><br/>
                </p>

                {/*Team Image*/}
                <img className="mirror-img" src={mirrorImg12} alt="mirror-pic" style={{width: '90%', height: '90%'}}/>
                <p className="mirror-p" style={{textAlign: "center", fontSize: "14px"}}>
                    Smart Mirror Team (left to right): Justin Do, Erica Dietz, Jason Nguyen, and Efrain Guerra
                </p>

                {/*Information Card*/}
                <div className="mirror-info">
                    <div className="mirror-column">
                        <h6>ROLE</h6>
                        <ul>Computer Engineer</ul>
                        <h6>YEAR</h6>
                        <ul>2021</ul>
                        <h6>CLIENT</h6>
                        <ul>Dr.Dmitri Litvinov</ul>
                        <ul>UH Professor</ul>
                        <h6>WEB</h6>
                        <ul>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PL39K2eqHjM5v8lgJWT0UtdWnXx6UzGPUR">YouTube</a>
                        </ul>
                    </div>
                    <div className="mirror-column">
                        <h6>DELIVERABLES</h6>
                        <ul>Software Development</ul>
                        <ul>Hardware Development</ul>
                        <h6>TEAM LEADER</h6>
                        <ul>Jason Nguyen</ul>
                        <h6>TEAM MEMBERS</h6>
                        <ul>Justin Do</ul>
                        <ul>Erica Dietz</ul>
                        <ul>Efrain Guerra</ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Mirror;