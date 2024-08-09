import React from 'react';
import ProfileCardView from './ProfileCardView';
import './AllTeam.css'; // Import the CSS file

// Importing image assets
import pratikImg from '../assets/pratik_img.png';
import twitterLight from '../assets/twitter-light.svg';
import githubLight from '../assets/github-light.svg';
import linkedinLight from '../assets/linkedin-light.svg';

const AllTeam = () => {
  return (
    <div className="all-team-container">
      <ProfileCardView
        imageSrc={pratikImg}
        name="Pratik Mitakr"
        title="Full Stack Developer, App Developer"
        subtitle="laksjgjnds"
        twitterLink="https://twitter.com/yourprofile"
        githubLink="https://github.com/yourprofile"
        linkedinLink="https://linkedin.com/in/yourprofile"
        twitterIcon={twitterLight}
        githubIcon={githubLight}
        linkedinIcon={linkedinLight}
      />
      <ProfileCardView
        imageSrc={pratikImg}
        name="Pratik Mitakr"
        title="Full Stack Developer, App Developer"
        subtitle="laksjgjnds"
        twitterLink="https://twitter.com/yourprofile"
        githubLink="https://github.com/yourprofile"
        linkedinLink="https://linkedin.com/in/yourprofile"
        twitterIcon={twitterLight}
        githubIcon={githubLight}
        linkedinIcon={linkedinLight}
      />
      <ProfileCardView
        imageSrc={pratikImg}
        name="Pratik Mitakr"
        title="Full Stack Developer, App Developer"
        subtitle="laksjgjnds"
        twitterLink="https://twitter.com/yourprofile"
        githubLink="https://github.com/yourprofile"
        linkedinLink="https://linkedin.com/in/yourprofile"
        twitterIcon={twitterLight}
        githubIcon={githubLight}
        linkedinIcon={linkedinLight}
      />
      <ProfileCardView
        imageSrc={pratikImg}
        name="Pratik Mitakr"
        title="Full Stack Developer, App Developer"
        subtitle="laksjgjnds"
        twitterLink="https://twitter.com/yourprofile"
        githubLink="https://github.com/yourprofile"
        linkedinLink="https://linkedin.com/in/yourprofile"
        twitterIcon={twitterLight}
        githubIcon={githubLight}
        linkedinIcon={linkedinLight}
      />
    </div>
  );
}

export default AllTeam;
