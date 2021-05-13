import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ChevronDown = enhancerIcon('chevron-down', 'ChevronDown', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="6 9 12 15 18 9" />
</svg>
));

export default ChevronDown;
