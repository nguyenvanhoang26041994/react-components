import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Alien = enhancerIcon('alien', 'Alien', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 17a2.5 2.5 0 0 0 2 0" />
  <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
  <line x1="8" y1="11" x2="10" y2="13" />
  <line x1="16" y1="11" x2="14" y2="13" />
</svg>
));

export default Alien;
