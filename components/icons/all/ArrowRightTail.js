import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowRightTail = enhancerIcon('arrow-right-tail', 'ArrowRightTail', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l3 -3l-3 -3" />
  <path d="M3 15l3 -3l-3 -3" />
  <line x1="6" y1="12" x2="21" y2="12" />
</svg>
));

export default ArrowRightTail;
