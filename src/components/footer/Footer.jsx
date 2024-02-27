import style from './Footer.module.scss'
import {HOME} from '../../constants/routerLinks'
import {Link} from "react-router-dom";

export const Footer  = ()=>{
    return(
        <footer className={style.footer}>
            <Link to={HOME}>
                <img
                    src='/img/icons/webWizard.svg'
                    className={style.webWizard}
                    alt='webWizard'
                />
            </Link>
        </footer>

    )
}
