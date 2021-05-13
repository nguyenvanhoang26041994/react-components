import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowTopCircle = enhancerIcon('arrow-top-circle', 'ArrowTopCircle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="17" x2="12" y2="3" />
  <path d="M15 6l-3 -3l-3 3" />
  <circle cx="12" cy="19" r="2" />
</svg>
));

export default ArrowTopCircle;
