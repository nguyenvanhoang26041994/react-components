import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Pokeball = enhancerIcon('pokeball', 'Pokeball', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="9" r="9" transform="translate(3 3)" />
  <circle cx="12" cy="12" r="3" />
  <path d="M3 12h6m6 0h6" />
</svg>
));

export default Pokeball;
