import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowUp = enhancerIcon('arrow-up', 'ArrowUp', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="18" y1="11" x2="12" y2="5" />
  <line x1="6" y1="11" x2="12" y2="5" />
</svg>
));

export default ArrowUp;
