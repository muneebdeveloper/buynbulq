import React from 'react';


const Drawer = ()=>{
    return(
        <div className="navigation-drawer">
            
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


export default Drawer;