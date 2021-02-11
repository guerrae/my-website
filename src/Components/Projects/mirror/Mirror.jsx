import React, {Component} from 'react';
import mirrorImg1 from '../../../logos/projects/smartMirror1.jpg';
import mirrorImg2 from '../../../logos/projects/smartMirror2.jpg';
import mirrorImg3 from '../../../logos/projects/smartMirror3.jpg';
import mirrorImg4 from '../../../logos/projects/smartMirror4.jpg';
import mirrorImg5 from '../../../logos/projects/smartMirror5.jpg';
import mirrorImg6 from '../../../logos/projects/smartMirror6.jpg';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './mirror.scss';

const robotImgs = [
    mirrorImg2,
    mirrorImg3,
    mirrorImg4,
    mirrorImg5,
    mirrorImg6,
]

class Mirror extends Component{
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
            <div className="mirror">
                {/*Main Heding*/}
                <h1 className="mirror-h-one">Smart Mirror</h1>

                {/*Main Image*/}
                <img className="mirror-img" src={mirrorImg1} alt="mirror-pic"/>

                {/*First Paragraph with Heding*/}
                <h3 style={{fontFamily: 'Roboto Slab', marginBottom: 0}}>The Project</h3>
                <p className="mirror-p">
                    In today’s world, technology continues to grow more complex as new gadgets and devices flood the market. 
                    Information is in abundance on the internet and is readily available from devices such as our smartphones, 
                    tablets, and computers. However, oftentimes it requires tedious steps for users to access this information 
                    since it is across several different applications, websites, and interfaces. By jumping back and forth through 
                    apps and websites, time is wasted by the user. With this in mind, we’re constructing our project the Smart 
                    Mirror. In this project we are aiming towards a device that seamlessly integrates into our daily routines 
                    without any additional effort. By not requiring the user to physically interact with several different 
                    applications or websites, our Smart Mirror will instead display the desired personalized information at a glance.
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
                    Currently the project is still in development with an expected completion date of April 2021. More information 
                    will become available as soon as the project is finalized. 
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