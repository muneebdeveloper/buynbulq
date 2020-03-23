import React, {Component} from 'react';

import MainWrapper from './MainWrapper/Index';
import CategoryBar from './CategoryBar/Index';
import TopDeals from './TopDeals/Index';
import AboutUs from './AboutUs/Index';

class Home extends Component{

    render(){
        return(
            <main className="homepage">

                <MainWrapper />
                <CategoryBar />
                <TopDeals />
                <AboutUs />
                
            </main>
        )
    }
}

export default Home;