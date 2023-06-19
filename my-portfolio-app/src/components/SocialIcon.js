import React from 'react';

const SocialIcon = ({ src, alt, link }) => {
  return (
    <a href={link}>
      <img src={src} alt={alt} />
    </a>
  );
}

export default SocialIcon;
