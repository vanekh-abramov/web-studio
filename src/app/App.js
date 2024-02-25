import style from './App.module.scss';
// import { Header } from "../header/Header";
// import { Home } from "../../pages/home/Home";
// import { AboutUs } from "../../pages/aboutUs/AboutUs";
import Header from '../components/header/Header';
import AppRouter from '../routes/AppRouter';

function App() {
    return (
        <div className={style.wrapper}>
            <Header />
            <AppRouter />
        </div>
    );
}

export default App;
