import style from './Btn.module.scss'
import {useState} from "react";
import {createPortal} from "react-dom";
import {FeedbackForm} from "../feedbackForm/FeedbackForm";


export function Btn({txt}){
    const portal = document.querySelector('#portal')
    const [showModal, setShowModal] = useState(false)
    return(
        <>
            <button
                className={style.btnAct}
                onClick={()=>setShowModal(true)}>
                {txt}
                <img src='/img/icons/arrowRight.svg' className={style.arrowBtn} alt='arrow'/>
            </button>
            {showModal && createPortal(
                <FeedbackForm onClose={()=>setShowModal(false)} />,
                portal
            )}
        </>
    )
}
