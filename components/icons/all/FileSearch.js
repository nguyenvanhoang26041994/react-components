import React from 'react';
import enhancerIcon from '../enhancerIcon';

const FileSearch = enhancerIcon('file-search', 'FileSearch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" />
  <circle cx="16.5" cy="17.5" r="2.5" />
  <line x1="18.5" y1="19.5" x2="21" y2="22" />
</svg>
));

export default FileSearch;
