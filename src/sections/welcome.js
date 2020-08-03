import React from 'react';
import Image from '../components/image';

const WelcomeSection = () => {
    return(
        <div className = "welcomeSection" id = "welcomeSection">
            <div className = "left">
                <h1>Przemysław Sipta</h1>
                <h2>Frontend developer</h2>
                <div className = "buttonWrapper">
                    <button className = "full">Pobierz CV</button>
                    <button className = "bordered">Zobacz projekty</button>
                </div>
            </div>
            <div className = "rigth">
                <Image imageStyle = {{objectFit: "contain"}} imageName = "mobileDesktopImage" className = "image"/>
            </div>
        </div>
    )
}

export default WelcomeSection