import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SortableSimple from './04 Sortable/Simple';
// import HandlesAndPreviews from './05 Customize/Handles and Previews';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SortableSimple />, document.getElementById('root'));
// ReactDOM.render(<HandlesAndPreviews />, document.getElementById('root'));
registerServiceWorker();
