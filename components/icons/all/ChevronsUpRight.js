import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ChevronsUpRight = enhancerIcon('chevrons-up-right', 'ChevronsUpRight', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 7h8v8" />
  <path d="M5 11h8v8" />
</svg>
));

export default ChevronsUpRight;
