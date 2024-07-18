import React from "react";
import Box10 from '../assets/Box10.jpg'
import Box11 from '../assets/Box11.jpg'
import Box12 from '../assets/Box12.jpg'



const Hero = () => {
  return (
    <>
    <Section1 />
    <Section2 />
    </>
    
    
  )
}

const Section1 = () => {
  return (
    <div className="sectionContainer1">
      <div className="section1textbox">
      <h1 className="h1Hero">Live 12.1 is now in public beta</h1>
      <p className="section1p">See what's new &gt;</p>
      </div>
      
    </div>
  )
}

const Section2 = () => {
  return (
    <>
    <div class="sectionContainer2">
  <div class="sectionSubheading">
    <h2 class="h2Hero">The latest from Ableton</h2>
    <ul class="subNavLinks">
      <li>All posts</li>
      <li>Artists</li>
      <li>News</li>
      <li>Downloads</li>
      <li>Tutorials</li>
      <li>Videos</li>
      <li>Loop</li>
    </ul>
  </div>
  <div class="imageContainer">
    <div class="card">
      <img src={Box11} alt="Image 1"></img>
      <div class="cardText">
        <span class="label">Downloads</span>
        <p class="title">Gesloten Cirkel: Free Tools and Tips for Spicing up Sounds</p>
      </div>
    </div>
    <div class="card">
      <img src={Box12} alt="Image 2"></img>
      <div class="cardText">
        <span class="label">Podcasts</span>
        <p class="title">Helado Negro on Sampling, Surroundings and Deep Listening</p>
      </div>
    </div>
    <div class="card">
      <img src={Box10} alt="Image 3"></img>
      <div class="cardText">
        <span class="label">Downloads</span>
        <p class="title">Latent Sonorities: A Transcultural Musical Proposal</p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Hero;