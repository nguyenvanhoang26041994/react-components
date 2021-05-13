import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Seeding = enhancerIcon('seeding', 'Seeding', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
  <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
  <line x1="12" y1="20" x2="12" y2="10" />
</svg>
));

export default Seeding;
