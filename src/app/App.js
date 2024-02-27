import style from './App.module.scss';
// import { Header } from "../header/Header";
// import { Home } from "../../pages/home/Home";
// import { AboutUs } from "../../pages/aboutUs/AboutUs";
import Header from '../components/header/Header';
import AppRouter from '../routes/AppRouter';
import {useLocation} from "react-router-dom";
import {Footer} from "../components/footer/Footer";

function App() {
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
