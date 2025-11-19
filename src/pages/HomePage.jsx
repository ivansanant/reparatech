import React from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaBoxOpen, FaSearch } from 'react-icons/fa'

// Importamos nuestros nuevos componentes reutilizables
import { ProductMiniCard } from '../components/ProductMiniCard'
import { CourseCard } from '../components/CourseCard'
import { TestimonialCard } from '../components/TestimonialCard'

import '../styles/Home.css'

export const HomePage = () => {

  // --- DATOS (En un caso real, vendrían de una API/Base de Datos) ---
  
  const featuredProducts = [
    { id: 1, title: "Pantalla iPhone 14 Pro", price: 89.99, img: "https://http2.mlstatic.com/D_NQ_NP_796169-MLA45607589514_042021-O.webp", rating: 4.8, stock: true },
    { id: 2, title: "Batería Samsung S23", price: 45.99, img: "https://acdn.mitiendanube.com/stores/001/221/744/products/bateria-iphone-x-1-d7817629a8417405a316262047478524-640-0.jpg", rating: 4.9, stock: true },
    { id: 3, title: "Kit Herramientas Pro", price: 129.99, img: "https://m.media-amazon.com/images/I/61+6T6c5cVL._AC_UF1000,1000_QL80_.jpg", rating: 5.0, stock: true },
    { id: 4, title: "Cable Flex iPhone 13", price: 24.99, img: "https://m.media-amazon.com/images/I/51+jQ-tJ1RL._AC_.jpg", rating: 4.7, stock: true },
  ]

  const popularCourses = [
    { id: 1, title: "Reparación de Pantallas", level: "Básico", duration: "4 semanas", rating: 4.9, students: 2400 },
    { id: 2, title: "Diagnóstico de Placas", level: "Intermedio", duration: "8 semanas", rating: 4.8, students: 1500 },
    { id: 3, title: "Microsoldadura Profesional", level: "Avanzado", duration: "12 semanas", rating: 5.0, students: 980 },
  ]

  const testimonials = [
    { id: 1, quote: "ReparaTech transformó mi negocio. Acceso rápido a repuestos.", author: "Carlos Méndez", role: "Técnico Certificado", initials: "CM" },
    { id: 2, quote: "Precios mayoristas y entregas rápidas. Invaluable.", author: "Maria González", role: "Propietaria Taller", initials: "MG" },
    { id: 3, quote: "Empecé sin experiencia y ahora tengo mi propio negocio.", author: "Luis Torres", role: "Estudiante", initials: "LT" },
  ]

  // --- RENDERIZADO ---

  return (
    <div className="container text-center" style={{ marginTop: '50px', marginBottom: '100px' }}>
      
      {/* 1. HERO SECTION */}
      <h1 className="display-5 fw-bold text-dark mb-3">
        Tu ecosistema completo <br />
        para <span className="text-blue-theme">reparación de celulares</span>
      </h1>
      <p className="lead fs-5 text-secondary mb-5">
        Ya seas estudiante o técnico profesional, ReparaTech tiene todo lo que necesitas
      </p>
      
      {/* 2. MAIN CARDS */}
      <div className="row justify-content-center g-4 mb-5">
        {/* Tarjeta Academia */}
        <div className="col-md-6 col-lg-5">
            <div className="card card-custom h-100 p-4">
                <div className="card-body">
                    <div className="icon-wrapper bg-blue-theme"><FaGraduationCap /></div>
                    <h3 className="fw-bold mb-3">Conviértete en Técnico</h3>
                    <p className="text-muted mb-4">Aprende de expertos con más de 15 años de experiencia.</p>
                    <ul className="feature-list">
                        <li className="text-blue-theme">200+ cursos en video HD</li>
                        <li className="text-blue-theme">Certificación oficial reconocida</li>
                        <li className="text-blue-theme">Comunidad de 5,000+ técnicos</li>
                    </ul>
                    <Link to="/academy" className="btn btn-blue-theme w-100 mb-3">Ver Cursos</Link>
                    <small className="text-muted d-block">Comienza gratis • Sin tarjeta de crédito</small>
                </div>
            </div>
        </div>

        {/* Tarjeta Tienda */}
        <div className="col-md-6 col-lg-5">
            <div className="card card-custom h-100 p-4 bg-light-subtle">
                <div className="card-body">
                    <div className="icon-wrapper bg-black-theme"><FaBoxOpen /></div>
                    <h3 className="fw-bold mb-3">¿Eres Técnico?</h3>
                    <p className="text-muted mb-4">Encuentra repuestos originales y compatibles.</p>
                    <div className="position-relative mb-2">
                        <FaSearch className="position-absolute text-muted" style={{top: '15px', left: '15px'}}/>
                        <input type="text" className="form-control input-custom ps-5" placeholder="Busca tu repuesto..." />
                    </div>
                    <p className="text-muted small mb-4 fst-italic">Ej: "iPhone 14 Pro pantalla"</p>
                    <ul className="feature-list">
                        <li className="text-blue-theme">10,000+ productos en stock</li>
                        <li className="text-blue-theme">Envío rápido en 24-48 horas</li>
                        <li className="text-blue-theme">Garantía en todos los productos</li>
                    </ul>
                    <Link to="/shop" className="btn btn-outline-black w-100 mb-3">Explorar Catálogo</Link>
                    <small className="text-muted d-block">Registro B2B gratuito • Precios mayoristas</small>
                </div>
            </div>
        </div>
      </div>

      {/* 3. SECCIÓN DIVIDIDA */}
      <div className="row g-5 mt-5 text-start">
        {/* Productos Destacados */}
        <div className="col-lg-6">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0">Repuestos Destacados</h4>
                <Link to="/shop" className="text-blue-theme text-decoration-none small">Ver todos &rarr;</Link>
            </div>
            <div className="row g-3">
                {featuredProducts.map(prod => (
                    <div className="col-6" key={prod.id}>
                        {/* USAMOS EL COMPONENTE REUTILIZABLE */}
                        <ProductMiniCard {...prod} />
                    </div>
                ))}
            </div>
        </div>

        {/* Cursos Populares */}
        <div className="col-lg-6">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0">Cursos Populares</h4>
                <Link to="/academy" className="text-blue-theme text-decoration-none small">Ver todos &rarr;</Link>
            </div>
            <div className="d-flex flex-column gap-3">
                {popularCourses.map(course => (
                    /* USAMOS EL COMPONENTE REUTILIZABLE */
                    <CourseCard key={course.id} {...course} />
                ))}
                
                <div className="p-3 bg-light border rounded-3 text-center mt-1">
                    <small className="fw-bold d-block">¿Quieres ser instructor?</small>
                    <small className="text-muted mb-2 d-block">Comparte tu conocimiento.</small>
                    <button className="btn btn-sm btn-dark py-0 px-3" style={{fontSize: '0.8rem'}}>Más información</button>
                </div>
            </div>
        </div>
      </div>

      {/* 4. ESTADÍSTICAS (Podríamos crear un componente StatBox también si quisiéramos) */}
      <div className="mt-5 pt-5">
        <h3 className="fw-bold mb-2">Números que hablan por nosotros</h3>
        <p className="text-muted mb-5">Miles de técnicos confían en ReparaTech.</p>
        <div className="row g-3">
            <div className="col-6 col-md-3"><div className="stat-box"><div className="stat-number">98%</div><small className="text-muted">Satisfacción</small></div></div>
            <div className="col-6 col-md-3"><div className="stat-box"><div className="stat-number">24/7</div><small className="text-muted">Soporte Técnico</small></div></div>
            <div className="col-6 col-md-3"><div className="stat-box"><div className="stat-number">48h</div><small className="text-muted">Envío Promedio</small></div></div>
            <div className="col-6 col-md-3"><div className="stat-box"><div className="stat-number">100%</div><small className="text-muted">Garantía</small></div></div>
        </div>
      </div>

      {/* 5. TESTIMONIOS */}
      <div className="mt-5 pt-5 text-start">
         <h3 className="fw-bold text-center mb-2">Lo que dicen nuestros técnicos</h3>
         <p className="text-muted text-center mb-5">Historias reales de profesionales.</p>
         <div className="row g-4">
            {testimonials.map(item => (
                <div className="col-md-4" key={item.id}>
                    {/* USAMOS EL COMPONENTE REUTILIZABLE */}
                    <TestimonialCard {...item} />
                </div>
            ))}
         </div>
      </div>

      {/* 6. MARCAS */}
      <div className="mt-5 pt-5 text-center">
        <h5 className="fw-bold mb-4 text-muted">Confían en nosotros</h5>
        <div className="brand-bar d-flex justify-content-center gap-5 flex-wrap" style={{borderTop: 'none', borderBottom: '1px solid #eee', paddingBottom: '20px', marginTop: '0'}}>
            <span className="brand-item h4 text-muted opacity-50">Apple</span>
            <span className="brand-item h4 text-muted opacity-50">Samsung</span>
            <span className="brand-item h4 text-muted opacity-50">Motorola</span>
            <span className="brand-item h4 text-muted opacity-50">Xiaomi</span>
            <span className="brand-item h4 text-muted opacity-50">Huawei</span>
        </div>
        <p className="text-muted small mt-4">
            Trabajamos con repuestos originales y compatibles de las marcas más reconocidas.
        </p>
      </div>

    </div>
  )
}