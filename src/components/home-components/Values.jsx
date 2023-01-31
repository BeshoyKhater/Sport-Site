import Image from "../../images/values.jpg";
import SectionHead from "../SectionHead";
import {GiCutDiamond} from "react-icons/gi"
import { values } from "../../data";
import ProCard from "../ProCard";
import Row from "react-bootstrap/esm/Row";


const Values = () => {
  return (
    <section className="values">
        <div className=" container values__container  ">
            <div className="row gx-lg-5 gy-5">
                <div className="col-lg-5">
                    <div  className="values__left">
                        <div className="values__image">
                            <img src={Image} alt="valuesImage" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="values__right">
                        <SectionHead icon={<GiCutDiamond/>} title="Values" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis ipsum optio sit eveniet vitae?</p>
                        <div className="values__wrapper">
                            <Row className="gy-5 gx-4">
                                {values.map(({id,icon,title,desc})=>{
                                    return (
                                        <div key={id} className="col-lg-6 col-md-6 col-12">
                                            <ProCard  className="values__value">
                                                <span>{icon}</span>
                                                <h4>{title}</h4>
                                                <small>{desc}</small>
                                            </ProCard>
                                        </div>
                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values