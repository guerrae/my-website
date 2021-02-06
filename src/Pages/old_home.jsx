import React, {useEffect} from "react";
import "./home.scss";
import Grid from "@material-ui/core/Grid";
import Footer from "../Components/footer/Footer";
import {HomeImage, HomeContent} from "./HomeItems";
import {Link} from "react-router-dom";
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../Components/navbar/Navbar";

const Home = () => {
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 3000,
            mirror: true,
        });
    }, []);

    return(
        <div className="home">
            <div className="home-header">
                <Nav/>
            </div>
            <div className="home-body">
                {HomeContent.map((item, index) => (
                    <Grid container justify="center" style={{paddingTop:'10em', margin:'0', width:'100%'}} spacing={4} key={index}>
                        <Grid item xs={12} sm={12} md={6} data-aos="fade-left"> 
                            <div className="home-body-content">
                                <h1 className={item.titleName}>
                                    {item.title}
                                </h1>
                                <p className={item.paragraphName}>
                                    {item.pContent}
                                </p>
                                <Link className="home-body-content-link" to={HomeImage[index].url}>
                                    <ListItem>
                                        <ListItemText style={{ marginLeft: '-16px', fontFamily: 'IM Fell French Canon' }}>{HomeImage[index].arrow}</ListItemText>
                                        <ListItemIcon><KeyboardArrowRightRoundedIcon style={{color: 'black', fontSize: 30, marginRight: '565px' }}/></ListItemIcon>
                                    </ListItem>
                                </Link>
                            </div> 
                        </Grid>
                        <Grid item style={{textAlign:"center"}} xs={12} sm={12} md={5} data-aos="fade-right">
                            <Link to={HomeImage[index].url}>
                                <img className="home-body-image" src={HomeImage[index].imgName} alt={HomeImage[index].title}/>
                            </Link>
                        </Grid>
                    </Grid>
                ))}
            </div>
            <div className="home-footer">
                <Footer/>
            </div>
        </div>
    );
};  
export default Home;

/*
<div className="home-header">
                <div className="home-header-title">
                    <span className="home-span1">
                        EFRAIN
                    </span>
                    <label>&nbsp;
                        <span className="home-span2">
                        GUERRA
                        </span>
                    </label>
                </div>
                <div>
                    <Link to="/about" className="home-header-link">About</Link>
                </div>
            </div>
*/