import style from './Header.module.scss';


export function Header(){
    return (
        <header className={style.header}>
            <ul className={style.menuList}>
                <li className={style.menuItem}>Прайс лист</li>
                <li className={style.menuItem}>Портфолио</li>
                <li className={style.menuItem}>О нас</li>
            </ul>

            <a href='#'>
                <img src='/img/icons/webWizard.svg'
                             className={style.webWizard}
                             alt='webWixard'/>
            </a>

            <ul className={style.socialList}>
                <li className={style.socialItem}>
                    <img src='/img/icons/inst.svg'
                         className={style.socialIcon}
                         alt='instagramm icon'/>
                </li>
                <li className={style.socialItem}>
                    <img src='/img/icons/vk.svg'
                         className={style.socialIcon}
                         alt='vk icon'/>
                </li>
                <li className={style.socialItem}>
                    <img src='/img/icons/whatsApp.svg'
                         className={style.socialIcon}
                         alt='whatsApp icon'/>
                </li>
                <li className={style.socialItem}>
                    <img src='/img/icons/tg.svg'
                         className={style.socialIcon}
                         alt='tg icon'/>
                </li>
            </ul>
        </header>
    )
}
