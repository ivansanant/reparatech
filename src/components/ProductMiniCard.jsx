import React from 'react'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import '../styles/Home.css' // Reutilizamos los estilos existentes

export const ProductMiniCard = ({ title, price, img, rating, stock }) => {
  return (
    <div className="product-mini-card p-3 h-100 d-flex flex-column">
        <img src={img} alt={title} className="img-fluid mb-2 mx-auto" />
        
        <div className="mb-1">
            <h6 className="small fw-bold mb-1 text-truncate">{title}</h6>
            <div className="small text-warning">
                <FaStar/>
                <span className="text-muted ms-1">{rating}</span>
            </div>
        </div>

        <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold text-blue-theme fs-5">${price}</span>
                {stock && (
                    <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-10 rounded-pill" style={{fontSize: '0.7rem'}}>
                        En Stock
                    </span>
                )}
            </div>
            <button className="btn btn-sm btn-blue-theme w-100 d-flex align-items-center justify-content-center gap-2">
                <FaShoppingCart size={14}/> Añadir al Carrito
            </button>
        </div>
    </div>
  )
}