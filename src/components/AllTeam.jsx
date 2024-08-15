import React from 'react';
import ProfileCardView from './ProfileCardView';
import './AllTeam.css'; // Import the CSS file

// Importing image assets
import pratikImg from '../assets/Pratik.png';
import twitterLight from '../assets/twitter-light.svg';
import githubLight from '../assets/github-light.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import g2 from '../assets/teqm (2).png'
import g1 from '../assets/teqm (4).png'
import g3 from '../assets/teqm (6).png'
import g4 from '../assets/gi.png'
import g5 from '../assets/g2.png'
import g6 from '../assets/img_team.png'

const AllTeam = () => {
  return (
    <div >
      <div className="all-team-container">
      <ProfileCardView
        imageSrc={g6}
        name=" Ankesh Khare"
        title="Project Director"

      />
      <ProfileCardView
        imageSrc={pratikImg}
        name="Pratik Mitkar"
        title="Full Stack Developer, App Developer"

      />

      <ProfileCardView
        imageSrc={g3}
        name=" Joha Kadri"
        title="Intern"

      />
      <ProfileCardView
        imageSrc={g1}
        name=" Sakshi Kad"
        title="Intern"

      />
      </div>


      <div className="all-team-container">


      <ProfileCardView
        imageSrc={g4}
        name="Devshree Gathade"
        title="Intern"

      />
      <ProfileCardView
        imageSrc={g2}
        name=" Vaishnavi Bhamare"
        title="Intern"

      />
            <ProfileCardView
        imageSrc={g5}
        name="Aditi Karanje"
        title="Intern"

      />
      </div>
    
    </div>
  );
}

export default AllTeam;
