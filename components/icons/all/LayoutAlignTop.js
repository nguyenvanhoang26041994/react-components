import React from 'react';
import enhancerIcon from '../enhancerIcon';

const LayoutAlignTop = enhancerIcon('layout-align-top', 'LayoutAlignTop', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="4" x2="20" y2="4" />
  <rect x="9" y="8" width="6" height="12" rx="2" />
</svg>
));

export default LayoutAlignTop;
