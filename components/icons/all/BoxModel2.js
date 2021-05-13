import React from 'react';
import enhancerIcon from '../enhancerIcon';

const BoxModel2 = enhancerIcon('box-model-2', 'BoxModel2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 8h8v8h-8z" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
</svg>
));

export default BoxModel2;
