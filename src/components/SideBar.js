import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/icon.png";
import * as FaIcons from "react-icons/fa";

function SideBar() {
    return (
        
        <ul
            className="navbar-nav bg-gradient-secondary sidebar sidebar-black accordion"
            id="accordionSidebar"
        >
            {/*<!-- Sidebar - Brand -->*/}
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                to="/"
            >
                <div className="sidebar-brand-icon">
                    <img className="w-50" src={image} alt="Digital House" />
                </div>
            </Link>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider my-0" />

            {/*<!-- Nav Item - Dashboard -->*/}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>TecnoGlobal Web</span>
                </Link>
            </li>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider" />
           
            {/*<!-- Heading -->*/}
            <div className="sidebar-heading">Caregorias</div>
            {/*<!-- Nav Item - Pages -->*/}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/laptops">
                    <span><FaIcons.FaLaptopCode/>Datos para el Usuario</span>
                </Link>
            </li>
            {/*<!-- Nav Item - Charts -->*/}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/hogar">
                    <span><FaIcons.FaHouseUser/>Hogar</span>
                </Link>
            </li>
            {/*<!-- Nav Item - Tables -->*/}
            <li className="nav-item">
                <Link className="nav-link" to="/cocina">
                    <span><FaIcons.FaDharmachakra/>Cocina</span>
                </Link>
            </li>
           

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        
    );
}
export default SideBar;