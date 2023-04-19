import React from 'react';
import icon from '../assets/user.svg';

function Header() {
  return (
    <>
      <div >
        <h2>Header</h2>
        <img src={icon} alt='icon'/>
      </div>
      <h1 className="text-sm font-bold underline">
      Hello world!
      </h1>
    </>

  )
};


export default Header;