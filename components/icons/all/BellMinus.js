import React from 'react';
import enhancerIcon from '../enhancerIcon';

const BellMinus = enhancerIcon('bell-minus', 'BellMinus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  <line x1="10" y1="11" x2="14" y2="11" />
</svg>
));

export default BellMinus;
