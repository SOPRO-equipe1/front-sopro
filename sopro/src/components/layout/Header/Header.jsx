import React from 'react';
import './Header.module.css'

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <a href="/" className="logo-link">
          <img className="sopro-logo" src="/assets/images/logo.png" alt="SOPRO Logotipo" />
        </a>
        
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><a href="/" className="nav-item">INÍCIO</a></li>
            <li><a href="/sobre" className="nav-item">SOBRE NÓS</a></li>
            <li><a href="/suporte" className="nav-item">SUPORTE</a></li>
            <li><a href="/produto" className="nav-item">PRODUTO</a></li>
            <li><a href="/planos" className="nav-item">PLANOS</a></li>
            <li><a href="/login" className="nav-item btn-login">LOGIN</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;