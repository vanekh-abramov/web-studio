import style from './Btn.module.scss'


export function Btn({txt}){
    return(
        <button className={style.btnAct}>
            {txt}
            <img src='/img/icons/arrowRight.svg' className={style.arrowBtn} alt='arrow'/>
        </button>
    )
}
