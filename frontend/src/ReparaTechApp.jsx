import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { FooterComponent } from "./components/FooterComponent"
import { HomePage } from "./pages/HomePage"
import { ShopPage } from "./pages/ShopPage"
import { ProductDetailPage } from "./pages/ProductDetailPage" // <--- IMPORTAR

// ... otros imports ...

export const ReparaTechApp = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBarComponent />
            
            <div className="container mt-4 flex-grow-1">
                <Routes>
                    <Route path='/' element={<HomePage title="Bienvenidos a ReparaTech" />}></Route>
                    <Route path='/shop' element={<ShopPage />}></Route>
                    
                    {/* --- NUEVA RUTA DINÁMICA --- */}
                    {/* El ":id" coincide con el useParams() de la página de detalle */}
                    <Route path='/shop/product/:id' element={<ProductDetailPage />}></Route> 
                    
                    {/* ... resto de rutas ... */}
                    <Route path='/*' element={<Navigate to='/' />}></Route>
                </Routes>
            </div>

            <FooterComponent />
        </div>
    )
}