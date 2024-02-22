import style from './App.module.scss';
import { Header } from "../header/Header";
import { Home } from "../../pages/home/Home";
import { AboutUs } from "../../pages/aboutUs/AboutUs";

function App() {
    return (
        <div className={style.wrapper}>
            <Header />
            <Home />
            <AboutUs />
        </div>
    );
}

export default App;
