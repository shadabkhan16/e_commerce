import Banner from "../components/Banner"
import NewArrivals from "../components/NewArrivals"
import PhotoGallery from "../components/PhotoGallery"
import Tagline from "../components/Tagline"


const Home = () => {
  return (
    <div>
        <Banner/>
        <Tagline/>
        <PhotoGallery/>
        <NewArrivals/>
    </div>
  )
}

export default Home