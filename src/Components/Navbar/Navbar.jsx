import React from 'react';
import navLogo from "../../assets/logo.png"
import { BsCoin } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="flex-1">
                <img className='h-10 w-10' src={navLogo} alt="" />
            </div>
            <div className="flex-none">
                <button className="btn flex gap-2 font-semibold">
                    0 Coins <BsCoin/>
                </button>
            </div>
        </div>
    );
};

export default Navbar;