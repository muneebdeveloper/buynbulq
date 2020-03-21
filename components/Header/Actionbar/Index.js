import React, {Component} from 'react';


class Actionbar extends Component{
    render(){
        return(
            <div className="special-nav flex-wrap">
                
                <a className="actionbar-btn">
                    chg
                </a>

                <a className="actionbar-btn">
                    chg
                </a>

                <a className="account-btn">
                    <span>
                        Submit
                    </span>
                </a>

            </div>
        );
    }
}

export default Actionbar;