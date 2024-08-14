import React from 'react';
import './ProfileCardView.css';

const ProfileCardView = ({
  imageSrc,
  name,
  title,
  subtitle,
  twitterLink,
  githubLink,
  linkedinLink,
  twitterIcon,
  githubIcon,
  linkedinIcon,
}) => {
  return (
    <div className="profile-card">
      <img src={imageSrc} alt="Profile" className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
      {/*<div className="socials">
        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn icon" />
        </a>
      </div>
      <p className="profile-subtitle">{subtitle}</p>*/}

    </div>
  );
};

export default ProfileCardView;
