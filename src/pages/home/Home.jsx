import {MainSlider} from "../../components/mainSlider/MainSlider";
import style from './Home.module.scss'
import {Btn} from "../../components/btn/Btn";


export function Home() {
    return (
        <main className={style.home}>
            <div className={style.mainTop}>
                <h1 className={style.mainTitle}>
                    <span>Разработка<br/>сайтов</span> <span className={style.orangeTxt}>под ключ</span>
                </h1>
                <div className={style.mainDescr}>
                    <p className={style.descrTxt}>Воплощаем вашу уникальность в каждой линии кода, создавая сайты, что
                        переносят границы ваших возможностей.</p>
                    <Btn txt='Пора действовать'/>
                </div>
            </div>
            <MainSlider/>
        </main>
    )
}
