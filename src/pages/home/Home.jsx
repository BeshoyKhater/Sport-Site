import FAQs from "../../components/home-components/FAQs"
import Testimonials from "../../components/home-components/Testimonials"
import Values from "../../components/home-components/Values"
import MainHeader from "../../components/home-components/MainHeader"
import Programs from "../../components/home-components/Programs"




const Home = () => {
  return (
    <>
      <MainHeader/>
      <Programs />
      <Values />
      <FAQs/>
      <Testimonials/>
    </>
  )
}

export default Home