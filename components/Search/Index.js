import React, {Component} from 'react';

import Filter from './Filter/Index';
import Listing from './Listing/Index';

class Search extends Component{

    render(){
        return(
            <main className="homepage" style={{marginTop:'140px'}}>
                <div className="container">
                    <div className="row">
                        <Filter />
                        <Listing />
                    </div>
                </div>
            </main>
        )
    }
}


export default Search;