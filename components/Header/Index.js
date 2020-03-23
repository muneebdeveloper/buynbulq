import React, {Component} from 'react';

import Logo from './Logo';
import Navbar from './Navbar/Index';
import Actionbar from './Actionbar/Index';
import DrawerComp from './Drawer/Index';
import Drawer from '@material-ui/core/Drawer';

class Header extends Component{

    render(){
        return(
            <>
            <div className="header">
                <div className="container">
                    <div className="flex-wrap">
                        <Logo />
                        <Navbar />
                        <Actionbar />
                    </div>
                </div>
            </div>
            <Drawer anchor="left" open={false}>
                <DrawerComp />
            </Drawer>
            </>
        )
    }
}


export default Header;