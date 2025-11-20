import React from 'react'
import { FaChevronUp, FaSearch, FaChevronDown } from 'react-icons/fa'
import '../styles/Shop.css'

// Sub-componente interno para evitar repetición
const FilterGroup = ({ title, children, isOpen = true }) => (
    <div className="filter-group">
        <div className="filter-header d-flex justify-content-between align-items-center">
            {title} {isOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
        </div>
        {isOpen && <div>{children}</div>}
    </div>
);

export const ShopSidebar = () => {
  return (
    <div className="filters-sidebar h-100"> {/* h-100 para intentar igualar altura */}
        <h5 className="filter-title">Filtros</h5>
        
        {/* Categorías */}
        <FilterGroup title="Categoría">
            <ul className="category-list">
                <li className="active">Pantallas</li>
                <li>Baterías</li>
                <li>Flex de Carga</li>
                <li>Cámaras</li>
                <li>Tapas Traseras</li>
                <li>Herramientas</li>
            </ul>
        </FilterGroup>

        {/* Marca */}
        <FilterGroup title="Marca">
            {['Samsung', 'Apple', 'Motorola', 'Xiaomi', 'Huawei'].map(brand => (
                 <label key={brand} className="checkbox-label">
                    <input type="checkbox" defaultChecked={brand === 'Samsung'} /> {brand}
                 </label>
            ))}
        </FilterGroup>

        {/* Modelo */}
        <FilterGroup title="Modelo">
            <div className="position-relative">
                <FaSearch className="position-absolute text-muted" style={{top: '10px', left: '10px', fontSize: '0.8rem'}}/>
                <input type="text" className="form-control form-control-sm ps-4" placeholder="Buscar modelo..." />
            </div>
        </FilterGroup>

        {/* Calidad */}
        <FilterGroup title="Calidad">
            {['Original', 'OLED', 'AAA', 'Incell'].map(quality => (
                 <label key={quality} className="checkbox-label">
                    <input type="checkbox" /> {quality}
                 </label>
            ))}
        </FilterGroup>

        {/* Rango de Precio (Cerrado por defecto visualmente con el icono Down) */}
        <div className="filter-group">
             <div className="filter-header d-flex justify-content-between align-items-center">
                Rango de Precio <FaChevronDown size={12}/>
             </div>
        </div>

    </div>
  )
}