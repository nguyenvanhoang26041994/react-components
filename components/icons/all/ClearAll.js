import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ClearAll = enhancerIcon('clear-all', 'ClearAll', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 6h12" />
  <path d="M6 12h12" />
  <path d="M4 18h12" />
</svg>
));

export default ClearAll;
