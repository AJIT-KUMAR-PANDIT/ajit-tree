import React from 'react';
import {
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaBlogger,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';

const SocialIcon = ({ serviceName, size = 24, color = 'currentColor' }) => {
  let IconComponent;

  switch (serviceName.toLowerCase()) {
    case 'portfolio website':
      IconComponent = FaGlobe;
      break;
    case 'github':
      IconComponent = FaGithub;
      break;
    case 'linkedin':
      IconComponent = FaLinkedin;
      break;
    case 'twitter':
      IconComponent = FaTwitter;
      break;
    case 'youtube':
      IconComponent = FaYoutube;
      break;
    case 'blog':
      IconComponent = FaBlogger;
      break;
    case 'email':
      IconComponent = FaEnvelope;
      break;
    case 'instagram':
      IconComponent = FaInstagram;
      break;
    default:
      return null; // Or a default icon if preferred
  }

  return <IconComponent size={size} color={color} />;
};

export default SocialIcon;
