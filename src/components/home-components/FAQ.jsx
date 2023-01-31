import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"
import { useState } from "react"

const FAQ = ({question,answer}) => {
    const [showAnswer,setShowAnswer]=useState(false);
  return (
    <div className="col-lg-6 col-md-12 ">
      <div className="faq" onClick={()=>setShowAnswer(prev => !prev)}>
        <div >
            <h6>{question}</h6>
            <button className="faq_icon">
                {showAnswer ? <AiOutlineMinus/> :<AiOutlinePlus/>}
            </button>
        </div>
        {showAnswer && <p>{answer}</p>}
      </div>
    </div>
  )
}

export default FAQ