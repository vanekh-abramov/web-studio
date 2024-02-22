import style from './AboutUs.module.scss'
import {Consultation} from "../../components/consultation/Consultation";



export function AboutUs(){
    return(
        <section className={style.aboutUs}>
            <div className={style.aboutUsTop}>
                <div className={style.aboutTxt}>
                    <h3 className={style.title}>
                        Наш путь это
                    </h3>
                    <p className={style.descr}>
                        Layer vertical ipsum auto select inspect scrolling. Edit library fill selection project content. Underline thumbnail asset connection union star. Hand distribute scale ellipse pen. Horizontal italic blur scrolling layout figjam connection. Italic ellipse clip reesizing subtract figjam move link underline.
                    </p>
                </div>
                <img
                    className={style.descrImg}
                    src='/img/laptop.jpeg'
                    alt='laptop'
                />
            </div>
            <Consultation/>
        </section>
    )
}
