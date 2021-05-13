import React from 'react';
import enhancerIcon from '../enhancerIcon';

const MoodSuprised = enhancerIcon('mood-suprised', 'MoodSuprised', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="9" x2="9.01" y2="9" />
  <line x1="15" y1="9" x2="15.01" y2="9" />
  <circle cx="12" cy="15" r="2" />
</svg>
));

export default MoodSuprised;
