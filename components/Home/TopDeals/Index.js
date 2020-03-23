import React from 'react';
import Link from 'next/link';

const TopDeals = ()=>{

    let arr = [
        {
            name:'Maybelline new overstock cosmetic lots',
            drop:'Speical Offer',
            condition:'New',
            price:'$1.85/unit',
            priceCut:'$2',
            image:'1.jpg',
            shipping:'Ground Shipping Included'
        },
        {
            name:'Assorted Revlon new stock items',
            drop:'Price Drop 25%',
            condition:'Scratch',
            price:'$500',
            priceCut:'$800',
            image:'2.jpg',
            shipping:'Freight Shipping Included'
        },{
            name:'Assorted Bins of New Shelf-Pull Licensed Sports Clothing',
            drop:'Special Offer',
            condition:'New',
            price:'$4.45/unit',
            priceCut:'$5',
            image:'3.jpg',
            shipping:'Ground Shipping Included'
        }
    ];

    return(
        <section>
            <div className="kc-row-container kc-container">
                <div className="kc-wrap-columns">
                    <div className="kc-column kc_col-sm-12">
                        <div className="kc-col-container">
                           

                                <div className="af-title text-center">
                                    <h3>Top Deals</h3>
                                    <p>Check out the variety of top deals of many brands </p>
                                </div>

                                <div className="top-deals-listing responsivepadding">

                                    {
                                        arr.map((el)=>{
                                            const {name,drop,condition,price,priceCut,image,shipping} = el;
                                            return(
                                <div className="white-block hover-shadow advert-item advert-grid">
                                            <div className="advert-tags">
                                                <div className="ribbon featured">{condition}</div>
                                                <div className="ribbon-big negotiable">{shipping}</div>
                                            </div>
                                            <div className="pricedrop-tag">
                                                <div className="pricedrop-ribbon urgent">{drop}</div>
                                            </div>
                                            <Link href="/search">
                                                <a className="advert-media">
                                                    <img 
                                                        src={`/images/deals/${image}`}
                                                    />
                                                </a>
                                            </Link>
                                            <div className="white-block-content">
                                                <div className="top-advert-meta flex-wrap">
                                                    <div className="text-overflow" style={{display:"flex",alignItems:"center"}}>
                                                        <a style={{marginRight:'5px'}}>15 Bids</a>
                                                        <a className="bf-button">Bid now</a>
                                                    </div>
                                                    <div className="text-overflow" style={{display:"flex",alignItems:"center"}}>
                                                        <svg style={{width:'18px',maxWidth: '18px',height:'16px',maxHeight: '16px',fill: '#585656',marginRight: '3px'}}>
                                                            <use xlinkHref="/svg/sprites.svg#icon-heart-o"></use>
                                                        </svg>
                                                        <a>Wishlist+</a>
                                                    </div>
                                                </div>
                                                <h5 className="adv-title">
                                                    <Link href="/search">
                                                        <a className="text-overflow">
                                                            {name}
                                                        </a>
                                                    </Link>
                                                </h5>
                                                <div className="bottom-advert-meta flex-wrap">
                                                    <div class="price">{price}/<span>{priceCut}</span></div>
                                                    <a className="cf-button">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                            )
                                        })
                                    }

{
                                        arr.map((el)=>{
                                            const {name,drop,condition,price,priceCut,image,shipping} = el;
                                            return(
                                <div className="white-block hover-shadow advert-item advert-grid">
                                            <div className="advert-tags">
                                                <div className="ribbon featured">{condition}</div>
                                                <div className="ribbon-big negotiable">{shipping}</div>
                                            </div>
                                            <div className="pricedrop-tag">
                                                <div className="pricedrop-ribbon urgent">{drop}</div>
                                            </div>
                                            <Link href="/search">
                                                <a className="advert-media">
                                                    <img 
                                                        src={`/images/deals/${image}`}
                                                    />
                                                </a>
                                            </Link>
                                            <div className="white-block-content">
                                                <div className="top-advert-meta flex-wrap">
                                                    <div className="text-overflow" style={{display:"flex",alignItems:"center"}}>
                                                        <a style={{marginRight:'5px'}}>15 Bids</a>
                                                        <a className="bf-button">Bid now</a>
                                                    </div>
                                                    <div className="text-overflow" style={{display:"flex",alignItems:"center"}}>
                                                        <svg style={{width:'18px',maxWidth: '18px',height:'16px',maxHeight: '16px',fill: '#585656',marginRight: '3px'}}>
                                                            <use xlinkHref="/svg/sprites.svg#icon-heart-o"></use>
                                                        </svg>
                                                        <a>Wishlist+</a>
                                                    </div>
                                                </div>
                                                <h5 className="adv-title">
                                                    <Link href="/search">
                                                        <a className="text-overflow">
                                                            {name}
                                                        </a>
                                                    </Link>
                                                </h5>
                                                <div className="bottom-advert-meta flex-wrap">
                                                    <div class="price">{price}/<span>{priceCut}</span></div>
                                                    <a className="cf-button">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                            )
                                        })
                                    }
                                    
                                </div>

                                <div style={{height: '75px', width:'100%'}}></div>
                            
                            <div className="text-center">
                                <Link href="/search">
                                    <a class="kc_button header-alike">
                                        Load More
                                    </a>
                                </Link>
                            </div>

                  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopDeals;