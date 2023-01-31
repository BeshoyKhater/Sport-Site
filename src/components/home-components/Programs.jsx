import {FaCrown} from "react-icons/fa"
import { Link } from "react-router-dom"
import { programs } from "../../data"
import ProCard from "../ProCard"
import SectionHead from "../SectionHead"
import { AiFillCaretRight } from "react-icons/ai"
import Row from "react-bootstrap/esm/Row"

const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Programs" />
            <div className="programs__wrapper">
                <Row className=" g-lg-3 g-md-4 gy-4">
                    {programs.map(({id,icon,info,title,path})=>{
                        return (
                            <div key={id} className="col-lg-3 col-md-6 col-12">
                                <ProCard className="programs__program " >
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className="Btn_sm" >Learn More <AiFillCaretRight/> </Link>
                                </ProCard>
                            </div>
                        )
                    })}
                </Row>
            </div>
        </div>
    </section>
  )
}

export default Programs