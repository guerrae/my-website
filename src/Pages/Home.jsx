import React, {useEffect} from "react";
import Nav from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles"
import {Helmet} from "react-helmet";
import "./home.scss";

//import AOS, and styles
import AOS from "aos";
import "aos/dist/aos.css";

//import Swiper core, required components, and styles
import SwiperCore, { Navigation, Pagination, A11y, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Mousewheel, Pagination, A11y, Keyboard]);

const useStyles = makeStyles(theme =>({
    button: {
        //margin: theme.spacing(1),
        color: theme.palette.primary.main = "white",
        backgroundColor: theme.palette.primary.main = "#000000",

        "&:hover":{
            color: theme.palette.primary.main = "#000000",
            backgroundColor: theme.palette.primary.main = "#FFD700",
        }
    },
}))

const Home = () => {
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 3000,
            mirror: true,
        });
    }, []);

    const classes = useStyles();

    return(
        <div className="home">
            <Helmet><title>Efrain Guerra | Home</title></Helmet>
            <div className="home-header">
                <Nav/>
            </div>
            <div className="home-body">
                <Swiper spaceBetween={0} slidesPerView={1} direction={"vertical"} mousewheel={{ forceToAxis: true }}
                    pagination={{ clickable: true }} keyboard={{enabled: true}} onSwiper={(swiper) => console.log(swiper)} 
                    onSlideChange={() => console.log("slide change")}>
                    <SwiperSlide className="home-one">
                        <h1 className="home-one-h">Projects</h1>
                        <p className="home-one-p">
                            A collection of Professional and Educational Projects that I have worked on over the past decade.
                        </p>
                        <Button className={classes.button} component={Link} to="/projects/collection">
                            See All projects
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide className="home-two">
                        <h1 className="home-two-h">Games</h1>
                        <p className="home-two-p">A collection of games that I've worked on, built using JavaScript, CSS, and HTML.</p>
                        <Button className={classes.button} component={Link} to="/games/collection">
                            See All Games
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide className="home-three">
                        <h1 className="home-three-h">About</h1>
                        <p className="home-three-p">Computer Engineer with a pasion for Software and Electronics.</p>
                        <Button className={classes.button} component={Link} to="/about">
                            Learn More
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide className="home-four">
                        <h1 className="home-four-h">Contact</h1>
                        <p className="home-four-p">Lets Get in Touch!</p>
                        <Button className={classes.button} component={Link} to="/contact">
                            Send Email
                        </Button>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="home-footer">
                <Footer/>
            </div>
        </div>
    );
};  
export default Home;