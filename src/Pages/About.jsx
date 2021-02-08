import React from "react";
import {Link} from "react-router-dom";
import Nav from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import "./about.scss";
import mugShotImg from "../logos/mugShot.jpg";

//Skills
import skill1 from "../logos/Skills/c++.png";
import skill2 from "../logos/Skills/HTML.png";
import skill3 from "../logos/Skills/css.png";
import skill4 from "../logos/Skills/JavaScript.png";
import skill5 from "../logos/Skills/React.js.webp";
import skill6 from "../logos/Skills/material-ui.png";
import skill7 from "../logos/Skills/Python.webp";
import skill8 from "../logos/Skills/visual_studio.png";
import skill9 from "../logos/Skills/git.webp";
import skill10 from "../logos/Skills/github.png";
import skill11 from "../logos/Skills/sql.png";

//import Swiper core, required components, and styles
import SwiperCore, { Navigation, Pagination, A11y, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Mousewheel, Pagination, A11y, Keyboard, Autoplay]);

class About extends React.Component{
    render(){
        return(
            <div className="About">
                <div className="About-Header">
                    <Nav/>
                </div>
                <div className="About-Body">
                    
                    <img className="about-body-img" src={mugShotImg} alt="About Me"/>
                
                    <div className="about-body-content">
                        <h1 className="about-content-title">Hello! <br/> I'm Efrain.</h1>
                        <p className="about-content-paragraph">
                            I'm a Computer Engineer and front-end developer located in Houston, Texas.<br/><br/>
                            I enjoy finding solutions to complicated problems for both software and hardware applications. 
                            With my skills in HTML, CSS, and JavaScript I’ve been able to deliver dynamic web apps for an 
                            exceptional user experience. As for hardware, my skills in circuit analysis and embedded systems 
                            have provided me with the knowledge necessary to develop and assemble unique applications such 
                            as those found in robotics and the medical field.<br/><br/>
                            When I'm not coding or tinkering with electronics, you will find me playing guitar or at the local 
                            park scoring goals with friends. <br/><br/> Visit my &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/efrain-guerra">LinkedIn</a> 
                            &nbsp; profile or <Link to="/contact">contact</Link> me for more details.
                        </p>
                    </div>
                </div>
                <h1 className="skill-title">Skills & Experience</h1>
                <div className="about-skills">
                    <Swiper spaceBetween={70} slidesPerView={'auto'} direction={"horizontal"} centeredSlidesBounds={true} 
                        mousewheel={{ forceToAxis: true }} pagination={{ clickable: true }} keyboard={{enabled: true}} 
                        autoplay={{AutoplayOptions: true, delay: 2000}} onSwiper={(swiper) => console.log(swiper)} 
                        onSlideChange={() => console.log("slide change")}>
                        <SwiperSlide ><img className="skill-1" src={skill1} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-2"><img src={skill2} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-3"><img src={skill3} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-4"><img src={skill4} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-5"><img src={skill5} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-1"><img src={skill6} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-2"><img src={skill7} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-3"><img src={skill8} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-4"><img src={skill9} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-5"><img src={skill10} alt="skill-img"/></SwiperSlide>
                        <SwiperSlide className="skill-5"><img src={skill11} alt="skill-img"/></SwiperSlide>
                    </Swiper>
                </div>
                <div className="About-Footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default About;

/*
Icont Credit and Attribution to: 
Strokeicon: https://www.iconfinder.com/strokeicon
cobyne: https://www.iconfinder.com/cobynecz
Flatart: https://www.iconfinder.com/Flatart
Pixel Bazaar: https://www.iconfinder.com/zlaten
Alpar-Etele Meder: https://www.iconfinder.com/pocike
Erik Ragnar Eliasson: https://www.iconfinder.com/Erik_Rgnr
Samat Odedara: https://www.iconfinder.com/samatodedara
W3C: https://www.iconfinder.com/search/?q=html
https://icons8.com/icons/set/c
https://icons8.com/icons/set/material-ui
*/