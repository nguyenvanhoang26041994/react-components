import React from 'react';
import enhancerIcon from '../enhancerIcon';

const CircleHalfVertical = enhancerIcon('circle-half-vertical', 'CircleHalfVertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M3 12h18" />
</svg>
));

export default CircleHalfVertical;
