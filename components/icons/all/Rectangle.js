import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Rectangle = enhancerIcon('rectangle', 'Rectangle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
</svg>
));

export default Rectangle;
