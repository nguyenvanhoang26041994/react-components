import React from 'react';
import enhancerIcon from '../enhancerIcon';

const View360 = enhancerIcon('view-360', 'View360', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <ellipse cx="12" cy="12" rx="4" ry="9" />
  <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(90 12 12)" />
</svg>
));

export default View360;
