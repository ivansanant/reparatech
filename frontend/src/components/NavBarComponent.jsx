import { NavLink } from "react-router-dom"
import '../styles/NavBarComponent.css' 

export const NavBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                
                {/* 1. Marca (Izquierda) */}
                <NavLink to='/' className="navbar-brand">ReparaTech</NavLink>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    
                    {/* 2. Links (Centro Absoluto por CSS) */}
                    {/* Agregamos la clase 'nav-links-custom' para aplicar nuestro gap y posicionamiento */}
                    <div className="navbar-nav nav-links-custom"> 
                        <NavLink to='/shop' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Tienda</NavLink>
                        <NavLink to='/academy' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Academia</NavLink>
                        <NavLink to='/about' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Quienes Somos</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contacto</NavLink>
                    </div>
                
                    {/* 3. Botones (Derecha por justify-content-end en CSS) */}
                    <div className="d-flex align-items-center">
                        <NavLink to='/login' className="btn btn-login-custom me-2">
                            Login
                        </NavLink>
                        <NavLink to='/register' className="btn btn-register-custom">
                            Registro
                        </NavLink>
                    </div>

                </div>
            </div>
        </nav>
    )
}