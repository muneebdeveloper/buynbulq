import React, {Component} from 'react';
import Meta from './Meta';
import Router from 'next/router';
import NProgress from 'nprogress';

import Header from './Header/Index';

Router.onRouteChangeStart = ()=>{
  NProgress.start();
}

Router.onRouteChangeComplete = ()=>{
  NProgress.done();
}


class Page extends Component{


    render(){

        return(
            <>
                <Meta />
                <div className="container">
                    <Header />
                    {this.props.children}   
                </div>
            </>
        );

    }

}

export default Page;