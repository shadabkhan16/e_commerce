import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
// import Sign from "./pages/IsSignIn"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Product from "./pages/Product"
import Shop from "./pages/Shop"
import ContactUs from "./pages/ContactUs";


const App = () => {
  return (
    <Router>
      <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App