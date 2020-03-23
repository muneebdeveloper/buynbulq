import React, {Component} from 'react';
import Link from 'next/link';


class Listing extends Component{

    state={
        arr : [
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
        ]
    }

    render(){
        const {arr} = this.state;
        return(
            <>
            <div class="kc-search">
                <form class="header-search flex-wrap" style={{marginBottom:'35px'}}>
                    <div class="keyword-wrap">
                        <input type="text" style={{border: '1px solid #00a591'}} class="form-control" name="keyword" placeholder="Search for..." />
                    </div>
                    <a class="af-button">Search</a>
                </form>
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
            </div>
            </>
        )
    }
}


export default Listing;