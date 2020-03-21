import React from 'react';
import Link from 'next/link';

const Logo = ()=>{
    return(
        <Link href="/">
            <a className="logo">
                <img 
                    src="/images/logo.png"
                    alt="logo"
                    width={170}
                    height={50}
                />
            </a>
        </Link>
    );
}

export default Logo;