import Header from "../../components/Header"
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage1 from '../../images/about1.jpg'
import StoryImage2 from '../../images/about2.jpg'
import StoryImage3 from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam totam ut voluptatem officiis eveniet at nam soluta iste eius odit.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="about__section-image">
                <img src={StoryImage1} alt="OurStoryImage" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className=" about__section-content">
                <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat excepturi nemo quia neque sint eveniet nam facilis sed consectetur, vitae illum ipsa numquam libero hic quos quaerat. Voluptatem, sint.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore excepturi molestias porro nesciunt? Excepturi incidunt est architecto? Facere, voluptatum.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, officiis?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className=" container about__vision-container">
          <div className="row flex-md-reverse align-items-center g-5">
            <div className="col-lg-7">
              <div className="about__section-content">
                <h1>Our Vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat excepturi nemo quia neque sint eveniet nam facilis sed consectetur, vitae illum ipsa numquam libero hic quos quaerat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore excepturi molestias porro nesciunt? Excepturi incidunt est architecto?</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="   about__section-image">
                <img src={StoryImage2} alt="OurStoryImage" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="about__section-image">
                <img src={StoryImage3} alt="OurStoryImage" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about__section-content">
                <h1>Our Mission</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat excepturi nemo quia neque sint eveniet nam facilis sed consectetur, vitae illum ipsa numquam libero hic quos quaerat. Voluptatem, sint.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About