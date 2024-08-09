import React from 'react';
import Hero from '../components/Hero';
import pratik from '../assets/pratik_img.png'
import AllTeam from '../components/AllTeam';

const TeamPage = () => {
  return (
    <div>
      <Hero 
        heroImg= {pratik} 
        username="Pratik Mitakr" 
        development="Full stack devloper, app devloper" 
        Twitter="" 
        Github="" 
        Linkedin="" 
        description="laksjgjnds" 

      />
      <AllTeam/>
    </div>
  );
}

export default TeamPage;
