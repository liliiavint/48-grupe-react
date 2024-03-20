import ufoImg from './img/ufo.jpg';
import style from './Ufo.module.css';

function Ufo() {
    return (
        <main className={style.stylemain}>
            <div> 
                <h1>404</h1>
                <p>Page not found</p>
                <a href="/">Go home</a>
            </div>
            <img src={ufoImg} alt="Ufo lekste kuri vagia daiktus" />
        </main>
    );
}

export { Ufo };