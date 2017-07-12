import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import SortableSimple from './04 Sortable/Simple';
// import HandlesAndPreviews from './05 Customize/Handles and Previews';
// import SimpleTarget from './01 Dustbin/Single Target';
// import DragArea from './00 DragArea';
import DragulaDemo from './06 Dragula Demo';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<SortableSimple />, document.getElementById('root'));
// ReactDOM.render(<HandlesAndPreviews />, document.getElementById('root'));
// ReactDOM.render(<SimpleTarget />, document.getElementById('root'));
// ReactDOM.render(<DragArea />, document.getElementById('root'));
ReactDOM.render(<DragulaDemo />, document.getElementById('root'));

registerServiceWorker();
