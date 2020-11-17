import React, { useState } from 'react';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <h1>Admin Manage</h1>
            <button className="btn_Navbar" onClick={() => props.Click('users')} >
                Users
            </button>
            <button className="btn_Navbar" onClick={() => props.Click('products')} >
                Products
            </button>
        </div>
    );
}
 
export default Navbar;