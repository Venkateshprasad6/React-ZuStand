import React from 'react';
import useProduct from './Store/useProduct';

const Header = () => {
  const { divide } = useProduct();

  return (
    <div>
      <button onClick={divide}>DIVIDE</button>
    </div>
  
  );
   
};

export default Header;