import React from 'react';
import Link from 'next/link';

const Logo = ()=>{
    return(
        <Link href="/">
            <a className="logo">
                <h3 style={{fontFamily:'"Nunito",sans-serif',color:'#fff',margin:0}}>
                    BuynBulq
                </h3>
            </a>
        </Link>
    );
}

export default Logo;