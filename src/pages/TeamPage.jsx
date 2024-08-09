import React from 'react';
import Hero from '../components/Hero';
import pratik from '../assets/pratik_img.png'

const TeamPage = () => {
  return (
    <div>
      <Hero 
        heroImg= {pratik} 
        username="Pratik Mitakr" 
        development="Full stack devloper" 
        Twitter="" 
        Github="" 
        Linkedin="" 
        description="laksjgjnds" 

      />
    </div>
  );
}

export default TeamPage;
