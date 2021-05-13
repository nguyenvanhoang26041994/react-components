import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ChevronLeft = enhancerIcon('chevron-left', 'ChevronLeft', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="15 6 9 12 15 18" />
</svg>
));

export default ChevronLeft;
