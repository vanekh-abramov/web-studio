import style from './App.module.scss';
import Header from '../components/header/Header';
import AppRouter from '../routes/AppRouter';

const App = () => {

    return (
        <div className={style.wrapper}>
            <Header />
            <AppRouter />
        </div>
    );
}

export default App;
