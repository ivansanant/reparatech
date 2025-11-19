import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import '../styles/Shop.css'

export const ProductShopCard = ({ name, sku, price, badge, badgeClass, imageText }) => {
  return (
    <div className="shop-card h-100">
        {/* Etiqueta superior */}
        <span className={`badge-top-left ${badgeClass}`}>
            {badge}
        </span>

        {/* Placeholder de Imagen */}
        <div className="image-placeholder">
            {imageText}
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="shop-card-body">
            <div className="stock-badge">EN STOCK</div>
            <h3 className="shop-card-title text-truncate">{name}</h3>
            <span className="shop-sku">SKU: {sku}</span>
            
            <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="shop-price">${price}</span>
                <button className="btn-add-cart">
                    <FaShoppingCart size={16}/>
                </button>
            </div>
        </div>
    </div>
  )
}