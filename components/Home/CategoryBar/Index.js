import React from 'react';

import Link from 'next/link';

const CategoryBar = ()=>{

    const arr = [
        {name:'Merchandise',icon:'icon-user-tie'},
        {name:'Electronics',icon:'icon-tv'},
        {name:'Toys/baby items',icon:'icon-child_friendly'},
        {name:'Clothing',icon:'icon-t-shirt'},
        {name:'Health & Beauty',icon:'icon-accessibility'},
        {name:'Personal care',icon:'icon-clipboard'},
        {name:'Merchandise',icon:'icon-user-tie'},
        {name:'Household Items',icon:'icon-spoon-knife'}
    ];

    return(
        <section className="kc-css-602915">
            <div className="kc-row-container kc-container">
                <div className="kc-wrap-columns">
                    <div className="kc-column kc_col-sm-12">
                        <div className="kc-col-container">

                            <div className="af-title text-center">
                                <h3>Categories</h3>
                                <p>Select one of the category and start browsing</p>
                            </div>

                            <div style={{height: '30px', width: '100%'}}></div>

                            <div className="element-categories-table">

                                {
                                    arr.map((el,index)=>{
                                        return(
                                            <Link href="/search">
                                                <a className="hover-shadow">
                                                    <svg>
                                                        <use xlinkHref={`/svg/sprites.svg#${el.icon}`}></use>
                                                    </svg>
                                                    <h6 className="animation">{el.name}</h6>
                                                </a>
                                            </Link>
                                        )
                                    })
                                }


                            </div>

                            <div style={{height: '75px', width:'100%'}}></div>
                            
                            <div className="text-center">
                                <a class="kc_button header-alike">
                                     Browse All Categories
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryBar;