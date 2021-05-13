import React from 'react';
import enhancerIcon from '../enhancerIcon';

const FloatCenter = enhancerIcon('float-center', 'FloatCenter', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect width="6" height="6" x="9" y="5" rx="1" />
  <line x1="4" y1="7" x2="5" y2="7" />
  <line x1="4" y1="11" x2="5" y2="11" />
  <line x1="19" y1="7" x2="20" y2="7" />
  <line x1="19" y1="11" x2="20" y2="11" />
  <line x1="4" y1="15" x2="20" y2="15" />
  <line x1="4" y1="19" x2="20" y2="19" />
</svg>
));

export default FloatCenter;
