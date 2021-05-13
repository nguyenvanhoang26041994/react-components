import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Urgent = enhancerIcon('urgent', 'Urgent', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 16v-4a4 4 0 0 1 8 0v4" />
  <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
  <rect x="6" y="16" width="12" height="4" rx="1" />
</svg>
));

export default Urgent;
