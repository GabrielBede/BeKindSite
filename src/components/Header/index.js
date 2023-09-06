import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './HeaderElements'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img style={{width: '100px'}} src={require('../../img/BeKind.png')} alt='logo' />
        </NavLink>
        <Bars/> 
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/sobrenos' activeStyle>
            Sobre Nós
          </NavLink>
          <NavLink to='/blog' activeStyle>
            Blog
          </NavLink>
          <NavLink to='/doacoes' activeStyle>
            Doações
          </NavLink>
          <NavLink to='/voluntario' activeStyle>
            Voluntario
          </NavLink>
          <NavLink to='/eventos' activeStyle>
            Eventos
          </NavLink>
          <NavLink to='/loja' activeStyle>
            Loja
          </NavLink>
          
          <NavBtn>
            <NavBtnLink to='/doe'>Doe</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavBar;
