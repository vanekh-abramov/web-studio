import style from './App.module.scss';
import Header from '../components/header/Header';
import AppRouter from '../routes/AppRouter';
import {useLocation} from "react-router-dom";
import {Footer} from "../components/footer/Footer";



const App = () => {
const location = useLocation()
    return (
        <div className={style.wrapper}>
            <Header />
            <AppRouter />
            {location.pathname === '/' ? null : <Footer/>}
        </div>
    );
}

export default App;
