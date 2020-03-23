import React from 'react';


const MainWrapper = ()=>{
    return(
        <section className="mainwrapper">
            <div className="kc-row-container kc-container">
                <div className="kc-wrap-columns">

                    

                    <div className="kc-css-499567 kc_column">
                        <div className="kc-col-container">
                            <div className="af-title text-center">
                                <h1>
                                    <span style={{color:'#fff'}}>
                                        All you need is here and classified
                                    </span>
                                </h1>
                                <p>
                                    <span style={{color:'#fff'}}>
                                       Browse many <b>best brands</b> and at best rates
                                    </span>
                                </p>
                            </div>
                            <div  style={{height: '35px', width:'100%'}}></div>
                            <div className="kc-search">
                                <form className="header-search flex-wrap">
                                    <div className="keyword-wrap">
                                        <input type="text" class="form-control" name="keyword" placeholder="Search for..." />
                                    </div>
                                    <a className="af-button">Search</a>
                                </form>
                            </div>
                            <div  style={{height: '25px', width:'100%'}}></div>
                        </div>
                    </div>

                   

                </div>
            </div>
        </section>
    )
}

export default MainWrapper