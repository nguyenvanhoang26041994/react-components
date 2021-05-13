import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Social = enhancerIcon('social', 'Social', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="5" r="2" />
  <circle cx="5" cy="19" r="2" />
  <circle cx="19" cy="19" r="2" />
  <circle cx="12" cy="14" r="3" />
  <line x1="12" y1="7" x2="12" y2="11" />
  <line x1="6.7" y1="17.8" x2="9.5" y2="15.8" />
  <line x1="17.3" y1="17.8" x2="14.5" y2="15.8" />
</svg>
));

export default Social;
