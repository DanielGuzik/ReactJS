import React from 'react';
import './Description.css';
import portret from '../../../images/portret.png';
import twitter from '../../../images/twitter.svg';
import linkedin from '../../../images/linkedin.svg';
import facebook from '../../../images/facebook.svg';
import email from '../../../images/email.svg';

const Description = () => {
    return (
        <div className="container_desc">
            <img src={portret} className="ui image portret" alt="Daniel Guzik - zdjęcie" />
            <h2>Front-end Dev</h2>
            <p>Posiadam wykształcenie wyższe z zakresu <b>Informatyki</b> (licencjat). W tym roku uzyskam tytuł magistra inżyniera. Jestem absolwentem technikum Zespołu Szkół Energetycznych nr 9 w Krakowie.</p>

            <p>Mieszkam na obrzeżach Krakowa, ale studiuję i pracuję w centrum miasta. Stale podnoszę swoje umiejętności, biorąc udział w kursach internetowych.
                W wolnych chwilach lubię oglądać seriale na Netflixie, a największa przyjemność sprawiają mi wyjazdy zagraniczne, poznawanie nowych kultur i architektury europejskich miast. </p>

            <p>Obecnie rozwijam się w <b>ReactJS</b> i <b>React Native</b>. Tytuł magistra inżyniera pragnę obronić autorską aplikacją mobilną napisaną w <b>React Nativ</b>.
                Dotychczas zajmowałem się tworzeniem, projektowaniem i administrowaniem witryn internetowych dla małych firm.</p>

            <div className="desc-footer">
                <p>Kontakt: <a href="mailto:iam@danielguzik.pl">iam@danielguzik.pl</a></p>
                <p>Moje CV: <a href="https://drive.google.com/file/d/1FJFrFrHsyAJK4N9TYq5ZdoImrluiL6rN/view?usp=sharing" target="_blank" rel="noopener noreferrer">Zobacz</a></p>
                <p>Udostępnij:
                    <a href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdanielguzik.pl&title=Daniel%20Guzik&summary=Daniel%20Guzik%20-%20Web%20Developer%20-%20Portfolio&source=https%3A%2F%2Fdanielguzik.pl" target="_blank" rel="noopener noreferrer" title="Share on LinkedIn"><img className="share-buttons" alt="Share on LinkedIn" src={linkedin} /></a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdanielguzik.pl&quote=Daniel%20Guzik" title="Share on Facebook" target="_blank" rel="noopener noreferrer"><img className="share-buttons" alt="Share on Facebook" src={facebook} /></a>
                    <a href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fdanielguzik.pl&text=Daniel%20Guzik:%20https%3A%2F%2Fdanielguzik.pl&via=Dan_Guzik" target="_blank" rel="noopener noreferrer" title="Tweet"><img className="share-buttons" alt="Tweet" src={twitter} /></a>
                    <a href="mailto:?subject=Daniel%20Guzik&body=Daniel%20Guzik%20-%20Web%20Developer%20-%20Portfolio:%20https%3A%2F%2Fdanielguzik.pl" target="_blank" rel="noopener noreferrer" title="Send email"><img className="share-buttons" alt="Send email" src={email} /></a>
                </p>
            </div>

        </div>
    );
};

export default Description;