import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg"
import { MdEmail } from "react-icons/md"
import { BsMessenger } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias amet cumque soluta ex quia et. Aut vero ullam odit?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="/#"><MdEmail/></a>
            <a href="/#"><BsMessenger/></a>
            <a href="/#"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact