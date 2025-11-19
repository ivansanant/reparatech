import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { FooterComponent } from "./components/FooterComponent"
import { HomePage } from "./pages/HomePage"
import { ShopPage } from "./pages/ShopPage" // <--- 1. Importamos ShopPage

// ... imports de AcademyPage, AboutPage, ContactPage, Login, Register ...
import { AcademyPage } from "./pages/AcademyPage"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"


export const ReparaTechApp = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBarComponent />
            
            <div className="container mt-4 flex-grow-1">
                <Routes>
                    <Route path='/' element={<HomePage title="Bienvenidos a ReparaTech" />}></Route>
                    
                    {/* 2. Usamos ShopPage para la ruta /shop */}
                    <Route path='/shop' element={<ShopPage />}></Route> 
                    
                    <Route path='/academy' element={<AcademyPage />}></Route>
                    <Route path='/about' element={<AboutPage />}></Route>
                    <Route path='/contact' element={<ContactPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/register' element={<RegisterPage />}></Route>
                    <Route path='/*' element={<Navigate to='/' />}></Route>
                </Routes>
            </div>

            <FooterComponent />
        </div>
    )
}