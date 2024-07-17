import React from "react";



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
    <div className="sectionContainer2">
  <div className="sectionSubheading">
    <h2 className="h2Hero">The latest from Ableton</h2>
    <ul className="subNavLinks">
      <li>All posts</li>
      <li>Artists</li>
      <li>News</li>
      <li>Downloads</li>
      <li>Tutorials</li>
      <li>Videos</li>
      <li>Loop</li>
    </ul>
  </div>
</div>

    </>
  )
}

export default Hero;