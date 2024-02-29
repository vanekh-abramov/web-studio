import style from "./SocialNetwork.module.scss";
import React from "react";


export const SocialNetwork = () => {
    return (
        <ul className={style.socialList}>
            <li className={style.socialItem}>
                <img
                    src='/img/icons/inst.svg'
                    className={style.socialIcon}
                    alt='instagramm icon'
                />
            </li>
            <li className={style.socialItem}>
                <img
                    src='/img/icons/vk.svg'
                    className={style.socialIcon}
                    alt='vk icon'
                />
            </li>
            <li className={style.socialItem}>
                <img
                    src='/img/icons/whatsApp.svg'
                    className={style.socialIcon}
                    alt='whatsApp icon'
                />
            </li>
            <li className={style.socialItem}>
                <img
                    src='/img/icons/tg.svg'
                    className={style.socialIcon}
                    alt='tg icon'
                />
            </li>
        </ul>
    )
}
