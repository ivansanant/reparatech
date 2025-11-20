import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom' // <--- Importamos el hook de navegación
import '../styles/Shop.css'

// Asegúrate de recibir 'id' en las props
export const ProductShopCard = ({ id, name, sku, price, badge, badgeClass, imageText }) => {
  
  const navigate = useNavigate();

  // Función para navegar al detalle
  const handleCardClick = () => {
    navigate(`/shop/product/${id}`); // Navega a la URL dinámica
  }

  // Función para evitar que el clic en "Agregar al carrito" dispare la navegación
  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    console.log("Agregado al carrito:", name);
  }

  return (
    // Agregamos onClick al contenedor principal y la clase 'cursor-pointer' (puedes añadirla en CSS)
    <div className="shop-card h-100" onClick={handleCardClick} style={{cursor: 'pointer'}}>
        
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
                
                {/* Botón de carrito aislado del clic principal */}
                <button className="btn-add-cart" onClick={handleAddToCart}>
                    <FaShoppingCart size={16}/>
                </button>
            </div>
        </div>
    </div>
  )
}