import SectionHead from "../SectionHead"
import {ImQuotesLeft} from "react-icons/im"
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from "react-icons/io"
import ProCard from "../ProCard"
import { testimonials } from "../../data"
import { useState } from "react"

const Testimonials = () => {
    const [index,setIndex]=useState(0)
    const {name,quote,job,avatar}=testimonials[index]

    const prevIndex=()=>{
        setIndex(prev => prev-1)
        if(index <= 0){
            setIndex(testimonials.length -1);
        }
    }
    const nextIndex=()=>{
        setIndex(prev => prev+1)
        if(index >= testimonials.length - 1){
            setIndex(0);
        }
    }
  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials__head" />
            <ProCard className="testimonials">
                <div className="testimonials__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small>{job}</small>
            </ProCard>
            <div className="testimonails__btn-container">
                <button className="testimonials__btn" onClick={()=>prevIndex()}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials__btn" onClick={()=>nextIndex()}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials