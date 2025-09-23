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
import { FaXTwitter } from 'react-icons/fa6';
import {
  SiThreads,
  SiPinterest,
} from 'react-icons/si';

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
    case 'x (formerly twitter)':
      IconComponent = FaXTwitter;
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
    case 'threads':
      IconComponent = SiThreads;
      break;
    case 'pinterest':
      IconComponent = SiPinterest;
      break;
    default:
      return null; // Or a default icon if preferred
  }

  return <IconComponent size={size} color={color} />;
};

export default SocialIcon;