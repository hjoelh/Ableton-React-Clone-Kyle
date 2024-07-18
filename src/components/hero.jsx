import React from "react";
import Box1 from '../assets/Box1.jpg'
import Box2 from '../assets/Box2.jpg'
import Box3 from '../assets/Box3.jpg'
import Box4 from '../assets/Box4.jpg'
import Box5 from '../assets/Box5.jpg'
import Box6 from '../assets/Box6.jpg'
import Box7 from '../assets/Box7.jpg'
import Box8 from '../assets/Box8.jpg'
import Box9 from '../assets/Box9.jpg'
import Box10 from '../assets/Box10.jpg'
import Box11 from '../assets/Box11.jpg'
import Box12 from '../assets/Box12.jpg'



const Hero = () => {
  return (
    <>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
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


const Section3 = () => {
  return (
    <>
    <div class="sectionContainer2">
  <div class="sectionSubheading">
    <h2 class="h2Hero">Learn more about Live 12</h2>
    
  </div>
  <div class="imageContainer">
    <div class="card">
      <img src={Box4} alt="Image 1"></img>
      <div class="cardText">
        
        <p class="title">Get Tips and Tricks from Our Favourite Creators &gt;</p>
      </div>
    </div>
    <div class="card">
      <img src={Box9} alt="Image 2"></img>
      <div class="cardText">
       
        <p class="title">Discover Meld: Live 12's New Bi-Timbral Synth &gt;</p>
      </div>
    </div>
    <div class="card">
      <img src={Box2} alt="Image 3"></img>
      <div class="cardText">
        
        <p class="title">Watch the Learn Live 12 Videos &gt;</p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

const Section4 = () => {
  return (
    <>
    <div class="sectionContainer2">
  <div class="sectionSubheading">
    <h2 class="h2Hero">Expand Live 12 with Packs</h2>
    
  </div>
  <div class="imageContainer">
    <div class="card">
      <img src={Box3} alt="Image 1"></img>
      <div class="cardText">
        
        <p class="title">Granulator III &gt;</p>
      </div>
    </div>
    <div class="card">
      <img src={Box5} alt="Image 2"></img>
      <div class="cardText">
       
        <p class="title">Trap Drums by Sound Oracle &gt;</p>
      </div>
    </div>
    <div class="card">
      <img src={Box6} alt="Image 3"></img>
      <div class="cardText">
        
        <p class="title">Lost & Found &gt;</p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

const Section5 = () => {
  return (
    <>
    <div class="sectionContainer2">
  <div class="sectionSubheading">
    <h2 class="h2Hero">Develop your music making</h2>
    
  </div>
  <div class="imageContainer">
    <div class="card">
      <img src={Box7} alt="Image 1"></img>
      <div class="cardText">
        
        <p class="title">Learn the foundations of music &gt;</p>
      </div>
    </div>
    <div class="card">
      <img src={Box1} alt="Image 2"></img>
      <div class="cardText">
       
        <p class="title">Get started with Live &gt;</p>
      </div>
    </div>
    <div class="card">
      <img src={Box8} alt="Image 3"></img>
      <div class="cardText">
        
        <p class="title">Experiment with tuning &gt;</p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}


export default Hero;