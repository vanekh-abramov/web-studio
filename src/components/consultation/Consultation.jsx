import style from './Consultation.module.scss'
import {Btn} from '../btn/Btn';



export function Consultation(){
    return(
        <div className={style.consultation}>
            <div className={style.consultationContent}>
                <img
                    className={style.mobileImg}
                    src='/img/mobile.svg'
                    alt='mobile'
                />
                <div className={style.txt}>
                    <h3 className={style.title}>Сайт, который продает</h3>
                    <span className={style.subtitle}>эффективные веб-решения для вашего Бизнеса</span>
                </div>
            </div>
            <Btn txt='Заказать консультацию'/>
        </div>
    )
}
