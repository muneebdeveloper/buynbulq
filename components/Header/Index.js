import React, {Component} from 'react';

import Logo from './Logo';
import Navbar from './Navbar/Index';
import Actionbar from './Actionbar/Index';

class Header extends Component{

    render(){
        return(
            <div className="header">
                <div className="toolbox">
                    <div className="flex-wrap">
                        <Logo />
                        <Navbar />
                        <Actionbar />
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;