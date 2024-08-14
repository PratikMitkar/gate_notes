import React from 'react';
import ProfileCardView from './ProfileCardView';
import './AllTeam.css'; // Import the CSS file

// Importing image assets
import pratikImg from '../assets/Pratik.png';
import twitterLight from '../assets/twitter-light.svg';
import githubLight from '../assets/github-light.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import g1 from '../assets/gi.png'
import g2 from '../assets/g2.png'

const AllTeam = () => {
  return (
    <div className="all-team-container">
      <ProfileCardView
        imageSrc={pratikImg}
        name="Pratik Mitkar"
        title="Full Stack Developer, App Developer"

      />
      <ProfileCardView
        imageSrc={g1}
        name=" Joha Kadri"
        title="Intern"

      />
      <ProfileCardView
        imageSrc={g1}
        name=" Sakshi Kad"
        title="Intern"

      />
      <ProfileCardView
        imageSrc={g1}
        name="Devashree Gathade"
        title="Intern"

      />
      <ProfileCardView
        imageSrc={g2}
        name=" Vaishnavi Bhamare"
        title="Intern"

      />
            <ProfileCardView
        imageSrc={g2}
        name="Aditi Karanje"
        title="Intern"

      />
    </div>
  );
}

export default AllTeam;
