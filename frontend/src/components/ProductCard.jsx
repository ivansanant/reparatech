import React from 'react'
import '../styles/ProductCard.css' // Crearemos esto en el paso 2

export const ProductCard = ({ img, title, price, onAdd }) => {
  
  // Esta función maneja el evento interno del botón
  const handleAddClick = () => {
    console.log(`Agregando ${title} al carrito...`);
    // Aquí llamamos a la función que nos pasó el padre (comunicación hijo -> padre)
    onAdd(); 
  }

  return (
    <div className="card product-card h-100">
      <img src={img} className="card-img-top product-img" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">Repuesto original garantizado.</p>
        <div className="mt-auto">
            <span className="h5 d-block mb-2">${price}</span>
            
            {/* EVENTO onClick: Cuando se hace clic, ejecutamos handleAddClick */}
            <button 
                className="btn btn-primary w-100"
                onClick={handleAddClick} 
            >
                Agregar al Carrito
            </button>
        </div>
      </div>
    </div>
  )
}