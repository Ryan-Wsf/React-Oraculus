import { Link } from "react-router-dom";
import Header from "../componants/Header";
import { useHoroscope } from "../componants/datas";
import { useEffect } from "react";

function Home() {
    const {horoscope, currentIndex, setCurrentIndex} = useHoroscope();
    const handleNextHoroscope = () => {
        setCurrentIndex(currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0);
    };

    const handlePreviousHoroscope = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1);
    };
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            e.preventDefault();
            if(e.keyCode === 39){
                handleNextHoroscope();
            } else if(e.keyCode === 37){
                handlePreviousHoroscope();
            }
        };
        document.addEventListener('keyup', handleKeyDown);
        return () => {
            document.removeEventListener('keyup', handleKeyDown);
        };
    }, [currentIndex]);


    return (
        <>
            <Header />
            <main>
                <section>
                    <div>
                        <Link className="left-horoscope" onClick={handlePreviousHoroscope} to="#">{horoscope[currentIndex > 0 ? currentIndex -1 : horoscope.length -1].signe}
                        <span>{horoscope[currentIndex > 0 ? currentIndex -1 : horoscope.length -1].date}</span></Link>
                        <Link className="right-horoscope" onClick={handleNextHoroscope} to="#">{horoscope[currentIndex < horoscope.length -1 ? currentIndex +1 : 0].signe}
                        <span>{horoscope[currentIndex < horoscope.length -1 ? currentIndex +1 : 0].date}</span></Link>
                    </div>

                    <article>
                        <p id="datejour">-- HOROSCOPE DU {new Date().toLocaleDateString()}</p>
                        <h1>{horoscope[currentIndex].signe}</h1>
                        <span id="date">{horoscope[currentIndex].date}</span>
                        <div>
                            <p id="amour"><span>Amour : {horoscope[currentIndex].amour}</span></p>
                            <p id="travail"><span>Travail : {horoscope[currentIndex].travail}</span></p>
                            <p id="argent"><span>Argent : {horoscope[currentIndex].argent}</span></p>
                            <p id="sante"><span>Santé : {horoscope[currentIndex].sante}</span></p>
                            <p id="famille"><span>Famille et amis : {horoscope[currentIndex].famille}</span></p>
                            <p id="conseil"><span>Conseil : {horoscope[currentIndex].conseil}</span></p> 
                        </div>
                    </article>

                </section>
                <aside>
                    <img src={horoscope[currentIndex].image} alt={horoscope[currentIndex].signe} />
                </aside>
                </main>
        </>
    )
}
export default Home;