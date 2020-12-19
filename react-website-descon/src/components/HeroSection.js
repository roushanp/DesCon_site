import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ABOUT US</h1>
      <p>The Design and Construction group organizes different activities including designing of popsicle bridge, Spaghetti Bridge and other types of bridges.
        Along with that different structural analysis are performed practically. Students are encouraged to perform activities on their own ideas and use of different softwares for structural analysis. Basics of designing and softwares are taught through lectures and workshops throughout the year.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH INTRODUCTORY VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
