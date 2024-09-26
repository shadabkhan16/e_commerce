import Banner from "../components/Banner"
import BottomBanner from "../components/BottomBanner"
import NewArrivals from "../components/NewArrivals"
import PhotoGallery from "../components/PhotoGallery"
import PolicyCard from "../components/PolicyCard"
import Tagline from "../components/Tagline"


const Home = () => {
  return (
    <div>
        <Banner/>
        <Tagline/>
        <PhotoGallery/>
        <NewArrivals/>
        <PolicyCard/>
        <BottomBanner/>
    </div>
  )
}

export default Home