import { Link } from "react-router-dom"
import Image from "../../images/main_header.png"

const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container ">
          <div className="row  g-lg-5 g-md-3 g-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="main__header-left ">
                  <h4>#100DaysOfWorkOut</h4>
                  <h1>Join The Legends Of The Fitness World</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet quisquam culpa.</p>
                  <Link to="/plans" className="Btn_lg">Get Started</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  col-12">
              <div className="main__header-right ">
                  <div className="main__header-circle"></div>
                  <div className="main__header-image">
                    <img src={Image} alt="Main HeaderImage" />
                  </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default MainHeader