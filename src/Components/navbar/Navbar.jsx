import React from 'react';
import {NavItems} from './NavItems';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import {Link} from 'react-router-dom';
import './Navbar.scss';

class Navbar extends React.Component{
    state = {
        onMobile: false,
        windowWidth: window.innerWidth,
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
        if(this.state.windowWidth >= 960){
            this.setState({onMobile: false});
        }
    };
      
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    };

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    };

    handleClick = () => {
        this.setState({onMobile: !this.state.onMobile});
    };

    render() {
        return(
            <nav className="Navbar">
                <div className="nav-myName">
                    <a className="nav-myName-link" href="/">EFRAIN GUERRA 3</a>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    {this.state.onMobile ? <CloseRoundedIcon style={{ fontSize: 40 }}/> : <MenuRoundedIcon style={{ fontSize: 40 }}/>}
                </div>
                <ul className={this.state.onMobile ? "navbar-menu-two" : "navbar-menu-one"}>
                    {NavItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;

//<h1 className="nav-heding-one">EFRAIN GUERRA</h1>