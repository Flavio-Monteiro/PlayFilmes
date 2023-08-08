import React, { useState } from 'react';

const Nav = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveSubMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  return (
    <div className='nav'>
    
      <ul>
        <li
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="">Home</a>
          {activeSubMenu === 1 && (
            <ul className='sub-menu'>
              <li><a href="">Subitem 1</a></li>
              <li><a href="">Subitem 2</a></li>
              <li><a href="">Subitem 3</a></li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="">Filmes</a>
          {activeSubMenu === 2 && (
            <ul className='sub-menu'>
              <li><a href="">Lançamentos</a></li>
              <li><a href="">Animação</a></li>
              <li><a href="">categorias</a></li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="">Séries</a>
          {activeSubMenu === 3 && (
            <ul className='sub-menu'>
              <li><a href="">Subitem 1</a></li>
              <li><a href="">Subitem 2</a></li>
              <li><a href="">Subitem 3</a></li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(4)}
          // onMouseLeave={handleMouseLeave}
        >
          <a href="">Aplicativo</a>
          {/* {activeSubMenu === 4 && (
            <ul className='sub-menu'>
              <li><a href="">Subitem 1</a></li>
              <li><a href="">Subitem 2</a></li>
              <li><a href="">Subitem 3</a></li>
            </ul>
          )} */}
        </li>
      </ul>
    </div>
  );
}

export { Nav };
