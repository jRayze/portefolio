import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-portfolio">Portfolio
                    <ul className="nav-projects">
                        <NavLink to="/cscb" activeClassName="nav-active" className="hover">
                            <li>CSCB</li>
                        </NavLink>
                        <NavLink to="/project-2" activeClassName="nav-active" className="hover">
                            <li>Hypertube</li>
                        </NavLink>
                        <NavLink to="/project-3" activeClassName="nav-active" className="hover">
                            <li>Matcha</li>
                        </NavLink>
                        <NavLink to="/project-4" activeClassName="nav-active" className="hover">
                            <li>Gomoku</li>
                        </NavLink>
                    </ul>
                </li>

                <NavLink to="/contact" activeClassName="nav-active" className="hover">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;