import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-wrapper">
        <div className="footer-columns">
          <div className="footer-col">
            <div className="footer-logo-brand">
              <img src="/logo.png" alt="SOPRO Logo" />
              <span>SOPRO</span>
            </div>
            <p className="footer-desc">
              Redefinindo comunicação através de <br />
              tecnologia assistiva de próxima <br />
              geração.
            </p>
          </div>

          <div className="footer-col">
            <h4>Produto</h4>
            <ul className="footer-list">
              <li><a href="#">Recursos</a></li>
              <li><a href="#">Especificações</a></li>
              <li><a href="#">Preços</a></li>
              <li><a href="/suporte">Suporte</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <ul className="footer-list">
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Conecte-se</h4>
            <div className="footer-social-icons">
              <a href="#" className="social-icon-box"><img src="/icons/link.svg" alt="Social" /></a>
              <a href="#" className="social-icon-box"><img src="/icons/instagramfooter.svg" alt="Insta" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Sopro AI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

