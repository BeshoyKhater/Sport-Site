import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_4.jpg"
import ProCard from "../../components/ProCard"
import { plans } from "../../data"

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consectetur necessitatibus animi inventore repudiandae ipsum.
      </Header>
      <section className="plans">
        <div className="container plans__container ">
          <div className="row g-4">
            {plans.map(({id,name,price,desc,features})=>{
              return <div  key={id} className='col-lg-4 col-md-6 col-12 '>
                <ProCard className="plan">
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1><h2>/mo</h2>
                  <h4 className="mt-4">Features</h4>
                  {features.map(({feature,available},index)=>{
                    return(
                      <p key={index} className={!available ? 'disabled' : ''} >{feature}</p>
                    )
                  })}
                  <button className="Btn_lg">Choose Plan</button>
                </ProCard>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Plans