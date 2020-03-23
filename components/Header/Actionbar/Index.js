import React, {Component} from 'react';


class Actionbar extends Component{
    render(){
        return(
            <div className="special-nav flex-wrap">
                
                <a className="actionbar-btn">
                    <svg className="header-action-nav-svg">
                        <use xlinkHref='/svg/sprites.svg#icon-heart-o'></use>
                    </svg>
                    <span className="number-bubble">0</span>
                </a>

                <a className="actionbar-btn">
                    <svg className="header-action-nav-svg">
                        <use xlinkHref='/svg/sprites.svg#icon-shopping-cart'></use>
                    </svg>
                    <span className="number-bubble">0</span>
                </a>

                <a className="account-btn" style={{display:"flex",justifyContent:'center'}}>
                    <svg className="header-action-nav-svg" style={{width: '22px',height: '22px',marginRight: '5px'}}>
                        <use xlinkHref='/svg/sprites.svg#icon-user'></use>
                    </svg>
                    <span>
                        SignUp / Login
                    </span>
                </a>

            </div>
        );
    }
}

export default Actionbar;