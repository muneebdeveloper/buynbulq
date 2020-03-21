import React, {Component} from 'react';


class Navbar extends Component{

    render(){
        return(
            <div>
                <ul className="navigation">

                    <li>
                        <a>
                            Home 
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a>Home Page</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a>
                            Browse Ads 
                        </a>
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