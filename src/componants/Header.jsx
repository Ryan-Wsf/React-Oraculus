import { Link } from "react-router-dom";
import { useHoroscope } from "./datas";

function Header() {
    const {horoscope, currentIndex, setCurrentIndex} = useHoroscope();
    const handleNextHoroscope = () => {
        setCurrentIndex(currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0);
    };

    const handlePreviousHoroscope = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1);
    };
    return (
        <>
            <header>
                <Link to="#"><img src="/public/img/logo-oraculus.png" alt="Logo Oraculus" /></Link>
                <nav>
                    <ul>
                        <li><a className="active" href="#">Horoscope</a></li>
                        <li><a href="#">A propos</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="arrow">
                    <Link className="arrow-left" onClick={handlePreviousHoroscope} to="#"><i className="fa-solid fa-chevron-left"></i></Link>
                    <Link className="arrow-right" onClick={handleNextHoroscope} to="#"><i className="fa-solid fa-chevron-right"></i></Link>
                </div>
            </header>
        </>
    );
}
export default Header;