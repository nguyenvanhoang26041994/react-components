import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Trophy = enhancerIcon('trophy', 'Trophy', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="21" x2="16" y2="21" />
  <line x1="12" y1="17" x2="12" y2="21" />
  <line x1="7" y1="4" x2="17" y2="4" />
  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
  <circle cx="5" cy="9" r="2" />
  <circle cx="19" cy="9" r="2" />
</svg>
));

export default Trophy;
