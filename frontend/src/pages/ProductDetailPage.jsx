import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaShoppingCart, FaCheckCircle } from 'react-icons/fa'
import '../styles/Shop.css'

export const ProductDetailPage = () => {
  const { id } = useParams() // 1. Capturamos el ID de la URL (Frontend Routing)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 2. Petición al Servidor Express (Backend Routing)
    // Nota: Asegúrate de que tu servidor Express esté corriendo en el puerto 3000
    fetch(`http://localhost:3000/api/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Producto no encontrado')
        return res.json()
      })
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="text-center mt-5"><h2>Cargando repuesto...</h2></div>
  if (!product) return <div className="text-center mt-5"><h2>Producto no encontrado :(</h2><Link to="/shop">Volver</Link></div>

  return (
    <div className="container mt-5 mb-5">
      <Link to="/shop" className="text-decoration-none text-muted mb-4 d-inline-block">
        <FaArrowLeft className="me-2"/> Volver a la Tienda
      </Link>
      
      <div className="row g-5">
        {/* Columna Imagen */}
        <div className="col-md-6">
            <div className="detail-image-placeholder bg-light d-flex align-items-center justify-content-center rounded-3 border" style={{height: '400px'}}>
                <span className="h2 text-secondary opacity-50">{product.name}</span>
            </div>
        </div>

        {/* Columna Info */}
        <div className="col-md-6">
            <span className="badge bg-primary mb-2">{product.category || 'Repuesto'}</span>
            <h1 className="fw-bold mb-2">{product.name}</h1>
            <p className="text-muted mb-4">SKU: {product.sku}</p>

            <div className="fs-2 fw-bold text-primary mb-4">${product.price}</div>

            <p className="lead text-secondary mb-4">
                Este es un repuesto original garantizado. Compatible con las especificaciones de fábrica. 
                (Aquí iría la descripción larga que vendrá de tu base de datos).
            </p>

            <div className="d-flex align-items-center gap-3 mb-4">
                <div className="text-success small fw-bold">
                    <FaCheckCircle className="me-1"/> Stock Disponible
                </div>
                <div className="text-muted small">
                    Envío gratis a todo el país
                </div>
            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-primary btn-lg">
                    <FaShoppingCart className="me-2"/> Agregar al Carrito
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}