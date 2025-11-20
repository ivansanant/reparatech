import React from 'react'
import { ShopSidebar } from '../components/ShopSidebar'
import { ProductShopCard } from '../components/ProductShopCard'
import '../styles/Shop.css'

export const ShopPage = () => {

  // Datos simulados (Array de productos)
  const products = [
    { id: 1, name: "Módulo Display (OLED) - Samsung A51", sku: "843-SAM-A51", price: 75.99, badge: "OLED", badgeClass: "badge-oled", imageText: "A51 Display" },
    { id: 2, name: "Batería Interna iPhone 12 Pro", sku: "215-APP-12P", price: 45.50, badge: "Original", badgeClass: "badge-original", imageText: "Batería 12 Pro" },
    { id: 3, name: "Flex de Carga USB-C Samsung S21", sku: "843-SAM-S21F", price: 22.00, badge: "AAA", badgeClass: "badge-aaa", imageText: "Flex S21" },
    { id: 4, name: "Kit Herramientas Pro (25 en 1)", sku: "900-TL-K25", price: 35.99, badge: "Premium", badgeClass: "badge-premium", imageText: "Kit Tools" },
    { id: 5, name: "Cámara Trasera iPhone 11", sku: "215-APP-11C", price: 55.00, badge: "Original", badgeClass: "badge-original", imageText: "Cámara 11" },
    { id: 6, name: "Tapa Trasera Moto G30 (Azul)", sku: "450-MOT-G30", price: 18.50, badge: "Incell", badgeClass: "badge-incell", imageText: "Tapa G30" },
    { id: 7, name: "Módulo Display iPhone X", sku: "215-APP-X", price: 65.00, badge: "OLED", badgeClass: "badge-oled", imageText: "Display X" },
    { id: 8, name: "Pin de Carga Motorola G20", sku: "450-MOT-G20", price: 5.50, badge: "AAA", badgeClass: "badge-aaa", imageText: "Pin G20" },
  ]

  return (
    <div className="container shop-container mt-4">
      
      {/* Breadcrumb */}
      <div className="text-muted small mb-4">
        Inicio / Tienda / Repuestos / <span className="text-dark fw-bold">Samsung</span>
      </div>

      {/* Header Tienda */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold m-0">Repuestos <span className="text-muted fs-5 fw-normal">(Mostrando {products.length} resultados)</span></h2>
        
        <div className="d-flex align-items-center">
            <span className="me-2 small text-muted">Ordenar por:</span>
            <select className="form-select form-select-sm" style={{width: '150px'}}>
                <option>Relevancia</option>
                <option>Menor Precio</option>
                <option>Mayor Precio</option>
            </select>
        </div>
      </div>

      <div className="row">
        
        {/* COLUMNA IZQUIERDA: SIDEBAR */}
        <div className="col-md-3 mb-4">
            <ShopSidebar />
        </div>

        {/* COLUMNA DERECHA: GRILLA */}
        <div className="col-md-9">
            <div className="row g-3">
                {products.map(product => (
                    <div className="col-md-4 col-sm-6" key={product.id}>
                        <ProductShopCard {...product} />
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  )
}