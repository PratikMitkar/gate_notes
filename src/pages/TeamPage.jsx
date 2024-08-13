import React from 'react';
import Hero from '../components/Hero';
import pratik from '../assets/bgi.jpg'
import AllTeam from '../components/AllTeam';
import Header from '../components/headTital';


const TeamPage = () => {
  return (
    <div>
     {/* <Hero 
        heroImg= {pratik} 
        username="Pratik Mitakr" 
        development="Full stack devloper, app devloper" 
        Twitter="" 
        Github="" 
        Linkedin="" 
        description="laksjgjnds" 

      />*/}
            <Header
              backgroundImage={pratik} 
              title= 'Team' 
              /> 

      <AllTeam/>
    </div>
  );
}

export default TeamPage;
