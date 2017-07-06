import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SortableSimple from './components/SortableSimple';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<SortableSimple />, document.getElementById('root'));
registerServiceWorker();
