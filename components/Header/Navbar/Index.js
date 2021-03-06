import React, {Component} from 'react';
import Link from 'next/link';

class Navbar extends Component{

    render(){
        return(
            <div className="header-navbar">
                <ul className="navigation">

                    <li>
                        <a>
                            Home
                        <svg className="header-nav-svg">
                            <use xlinkHref="/svg/sprites.svg#icon-keyboard_arrow_down"></use>
                        </svg>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a>Home Page</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link href="/search">
                        <a>
                            Browse
                        </a>
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <a>Home Page</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a>
                            News 
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a>Home Page</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a>
                            Pages 
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a>Home Page</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a>
                            Contact 
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a>Home Page</a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        )
    }
}


export default Navbar;