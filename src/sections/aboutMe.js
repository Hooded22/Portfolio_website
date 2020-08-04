import React from "react";
import profileImage from "../images/profileImage.svg";

const AboutMeSection = () => {
    return(
        <div className = "aboutMe" id = "AboutMe">
            <h3>Kilka słów o mnie</h3>
            <div className = "container">
                <div className = "contentWrapper">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed justo eget lorem venenatis pharetra. Suspendisse convallis purus eu tortor rutrum molestie. Ut hendrerit lorem sit amet consectetur semper. Donec vitae fermentum nunLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed justo eget lorem venenatis pharetra. Suspendisse convallis purus eu tortor rutrum molestie. Ut hendrerit lorem sit amet consectetur semper. Donec vitae fermentum nunLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed justo eget lorem venenatis pharetra. Suspendisse convallis purus eu tortor rutrum molestie. Ut hendrerit lorem sit amet consectetur semper. Donec vitae fermentum nunLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed</p>
                </div>
                <div className = "imageWrapper">
                    <img src={profileImage}/>
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection;