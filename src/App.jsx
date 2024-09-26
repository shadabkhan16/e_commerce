import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Sign from "./pages/IsSignIn"


const App = () => {
  return (
    <div>
      <Header/>
      {/* <Sign/> */}
      <Home/>
      <Footer/>
    </div>
  )
}

export default App