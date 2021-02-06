import React from "react";
import "./home.scss";
import Grid from "@material-ui/core/Grid";
import Footer from "../Components/footer/Footer";
import {HomeImage} from "./HomeItems";
import {HomeContent} from "./HomeItems";
import {Link} from "react-router-dom"

class Home extends React.Component{
    state = {
        changeItem: 0,
    }

    detectScroll = (e) =>{
        //Down Scroll
        if(e.deltaY > 0){
            if(this.state.changeItem >= 0 && this.state.changeItem < 3){
                this.setState({changeItem: this.state.changeItem + 1});
            }
            else if(this.state.changeItem === 3){
                this.setState({changeItem: 0});
            }
            console.log(this.state.changeItem);
        }
        //Up Scroll
        if(e.deltaY < 0){
            if(this.state.changeItem > 0 && this.state.changeItem <= 3){
                this.setState({changeItem: this.state.changeItem - 1});
            }
            else if(this.state.changeItem === 0){
                this.setState({changeItem: 3});
            }
            console.log(this.state.changeItem);
        }
    }

    renderContent = () => {
        return(
            <div className="home-body-content">
                <h1 className={HomeContent[this.state.changeItem].titleName}>
                    {HomeContent[this.state.changeItem].title}
                </h1>
                <p className={HomeContent[this.state.changeItem].paragraphName}>
                    {HomeContent[this.state.changeItem].pContent}
                </p>
            </div>
        )
    }

    renderImage = () => {
        return(
            <Link to={HomeImage[this.state.changeItem].url}>
                <img className="home-image-one" src={HomeImage[this.state.changeItem].imgName} alt={HomeImage[this.state.changeItem].title}/>
            </Link>
        )
    }
      
    componentDidMount() {
        window.addEventListener("wheel", this.detectScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("wheel", this.detectScroll);
    }

    render(){
        return(
            <div className="home">
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
                <div className="home-body">
                    <Grid container justify="center" style={{paddingTop:'10em', margin:'0', width:'100%'}} spacing={4}>
                        <Grid item style={{textAlign:"center"}} xs={12} sm={12} md={6}> 
                            {this.renderContent()}  
                        </Grid>
                        <Grid item style={{textAlign:"center"}} xs={12} sm={12} md={5}>
                            {this.renderImage()}
                        </Grid>
                    </Grid>
                </div>
                <div className="home-footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Home;

//<Grid container maxwidth="lg" style={{paddingTop: '3em', paddingRight: '5em', paddingLeft:'10em',}} spacing={3} justify="center">
//<Grid item xs={2} style={{textAlign:"center"}}> Body </Grid>
// <img className="home-image-one" src={project_img} alt="imageOne"></img> 

//&nbsp -> this adds a space between spans


/*
detectScroll = (e) =>{
        //Down Scroll
        if(e.deltaY > 0){
            changeItem++;
            if(changeItem === 4){
                changeItem = 0;
            }
        }
        //Up Scroll
        if(e.deltaY < 0){
            changeItem--;
            if(changeItem === -1){
                changeItem = 3;
            }
        }
    }
*/