import React from "react";
import style from "./PriceList.module.scss"
import {Consultation} from "../../components/consultation/Consultation";
import {AccordionPrice} from "../../components/accordionPrice/AccordionPrice";

const PriceList = () => {
    return (
        <section className={style.priceList}>
            <div className={style.examples}>
                <div className={style.exampleCard}>
                    <div className={style.cardImgs}>
                        <img className={style.img} src="/img/stub.png" alt="landing example"/>
                        <img className={style.img} src="/img/stub.png" alt="landing example"/>
                        <span className={style.priceTitle}>Стоимость разработки:
                            <span className={style.price}> 150$</span>
                        </span>
                    </div>
                    <div className={style.cardTxt}>
                        <h3 className={style.exampleName}>Посадочная<br/>страница</h3>
                        <h4 className={style.exampleSubtitle}>Посадочная страница ( landing page ) для компании, услуги, товара, личная страница</h4>
                        <p className={style.exampleDescr}>Включает в себя дизайн, бекенд, фронтенд, тестирование, версию для мобильных устройств, а так же создание индивидуального логотипа вашей компании</p>
                    </div>
                </div>
                <div className={style.exampleCard}>
                    <div className={style.cardTxt}>
                        <h3 className={style.exampleName}>Информационный<br/>сайт</h3>
                        <h4 className={style.exampleSubtitle}>Сайт из нескольких страниц. Поможет более подробно рассказать о вашей компании и предоставляемых услугах</h4>
                        <p className={style.exampleDescr}>Включает в себя дизайн, бекенд, фронтенд, тестирование, версию для мобильных устройств, а так же создание индивидуального логотипа вашей компании</p>
                    </div>
                    <div className={style.cardImgs}>
                        <img className={style.img} src="/img/stub.png" alt="landing example"/>
                        <img className={style.img} src="/img/stub.png" alt="landing example"/>
                        <span className={style.priceTitle}>Стоимость разработки:
                            <span className={style.price}> От 250$</span>
                        </span>
                    </div>
                </div>
                <div className={style.exampleCard}>
                    <div className={style.cardImgs}>
                        <img className={style.img} src="/img/stub.png" alt="landing example"/>
                        <img className={style.img} src="/img/stub.png" alt="landing example"/>
                        <span className={style.priceTitle}>Стоимость разработки:
                            <span className={style.price}> 450$</span>
                        </span>
                    </div>
                    <div className={style.cardTxt}>
                        <h3 className={style.exampleName}>Интернет<br/>магазин</h3>
                        <h4 className={style.exampleSubtitle}>Сайт включающий в себя каталог товаров корину и возможность покупки. Основная цель продажа товаров</h4>
                        <p className={style.exampleDescr}>Включает в себя дизайн, бекенд, фронтенд, тестирование, версию для мобильных устройств, а так же создание индивидуального логотипа вашей компании</p>
                    </div>
                </div>
            </div>
            <div className={style.accordion}>
                <h3 className={style.exampleName}>Дополнительные услуги</h3>
                <AccordionPrice/>
            </div>

            <Consultation/>
        </section>
    );
};

export default PriceList;
