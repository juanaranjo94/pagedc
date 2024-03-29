import React, {Component} from 'react';
import {Link} from 'react-scroll';
import { NavLink} from 'react-router-dom';
import { translate } from "react-translate";
import Sticky from 'react-stickynode';


class OnepageMenu extends Component {
    render() {
        let { t, onChangeLanguage, value, classMenu} = this.props;
     

            return (
           <div className="navbar_fixed">
                <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                    
                    <header className={`header_area ${classMenu} `} id="header">
                    <nav className="navbar navbar-expand-lg menu_one menu_four">
                        <div className="container">
                            <NavLink className="navbar-brand sticky_logo" to="/pagedc">
                               <img className="logoWhite" src={require("../img/logo-dreamcode.png").default} alt=""/>
                                <img className="logoBlue" src={require("../img/logo-blue.png").default} alt="logo"/>                             
                            </NavLink>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#OnePageManuContent" aria-controls="OnePageManuContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="menu_toggle">
                                    <span className="hamburger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                    <span className="hamburger-cross">
                                        <span></span>
                                        <span></span>
                                    </span>
                                </span>
                            </button>

                            <div className="collapse navbar-collapse" id="OnePageManuContent">

                                 <ul className="navbar-nav menu w_menu lang">                                                                 
                                    <li className="dropdown submenu nav-item">
                                        <a className="nav-link">
                                            <i className="ti-world"></i>
                                            <select className="select-lang" defalutValue="" value={value} onChange={(value)=>{onChangeLanguage(value)}} >
                                                <option value="es" >ES</option>
                                                <option selected={'selected'} value="en" >EN</option>
                                            </select>
                                            
                                        </a>    
                                    </li>   

                                 </ul> 
                            </div>
                        </div>
                    </nav>
                    </header>
                </Sticky>
          </div>
            );
    }
}

export default translate('menu')(OnepageMenu);