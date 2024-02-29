import style from './FeedbackForm.module.scss'
import {Btn} from "../btn/Btn";
import {SocialNetwork} from "../socialNetwork/SocialNetwork";


export const FeedbackForm = ({onClose}) => {
    return (
        <section className={style.feedback}>
            <div className={style.img}></div>
            <div className={style.form}>
                <div className={style.inputsGroup}>
                    <label>
                        <input
                            className={style.input}
                            placeholder="Телефон"
                            type="text"/>
                    </label>
                    <label>
                        <input
                            className={style.input}
                            placeholder="Имя"
                            type="text"/>
                    </label>
                    <label>
                        <input
                            className={style.input}
                            placeholder="Email"
                            type="text"/>
                    </label>
                    <label>
                        <input
                            className={style.input}
                            placeholder="Тип сайта"
                            type="text"/>
                    </label>
                </div>
                <span className={style.contactUs}>Свяжитесь с нами</span>
                <SocialNetwork/>
                <Btn txt='Заказать консультацию'/>
                <button
                    onClick={onClose}
                    style={{
                        "backgroundColor": "red", "padding": "20px 40px", "color": "white", "fontSize": "25px"}}>
                    CLOSE!!!
                </button>
            </div>
        </section>
    )
}
