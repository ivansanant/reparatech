import React from 'react'
import { Link } from 'react-router-dom'
// Asegúrate de tener instalado: npm install react-icons
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import '../styles/FooterComponent.css' // Importamos el archivo original

export const FooterComponent = () => {
  return (
    <footer className="reparatech-footer">
      <div className="container">
        <div className="row">
          
          {/* Columna 1: Info y Redes */}
          <div className="col-md-3 mb-4">
            <h5>ReparaTech</h5>
            <p>
              El ecosistema completo para técnicos de reparación de celulares. 
              Repuestos profesionales y formación de calidad.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>

          {/* Columna 2: Tienda B2B */}
          <div className="col-md-3 mb-4">
            <h5>Tienda B2B</h5>
            <ul>
              <li><Link to="/shop">Catálogo Completo</Link></li>
              <li><Link to="/shop/screens">Pantallas</Link></li>
              <li><Link to="/shop/batteries">Baterías</Link></li>
              <li><Link to="/shop/tools">Herramientas</Link></li>
              <li><Link to="/shop/accessories">Accesorios</Link></li>
              <li><Link to="/shop/offers">Ofertas</Link></li>
            </ul>
          </div>

          {/* Columna 3: Academia */}
          <div className="col-md-3 mb-4">
            <h5>Academia</h5>
            <ul>
              <li><Link to="/academy">Todos los cursos</Link></li>
              <li><Link to="/academy/basic">Nivel Básico</Link></li>
              <li><Link to="/academy/intermediate">Nivel Intermedio</Link></li>
              <li><Link to="/academy/advanced">Nivel Avanzado</Link></li>
              <li><Link to="/academy/certifications">Certificaciones</Link></li>
              <li><Link to="/about">Instructores</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="col-md-3 mb-4">
            <h5>Contacto</h5>
            {/* Agregamos la clase 'icon-accent' a los iconos */}
            <p><FaMapMarkerAlt className="me-2 icon-accent"/> Av. Tecnología 123, Ciudad</p>
            <p><FaPhoneAlt className="me-2 icon-accent"/> +54 11 1234 5678</p>
            <p><FaEnvelope className="me-2 icon-accent"/> info@reparatech.com</p>
            
            <h6 className="mt-3" style={{color: 'white'}}>Horario de Atención</h6>
            <p>Lun a Vie: 9:00 - 18:00</p>
            <p>Sáb: 9:00 - 14:00</p>
        </div>
      </div>
    </div>

      {/* Barra Inferior */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">© 2025 ReparaTech. Todos los derechos reservados.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <Link to="/terms" className="me-3">Términos y Condiciones</Link>
              <Link to="/privacy" className="me-3">Política de Privacidad</Link>
              <Link to="/cookies">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}