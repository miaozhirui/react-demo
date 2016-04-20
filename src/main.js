import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';

import routes from './routes/routes.js';


render(<Router history={hashHistory} routes={routes}/>, document.getElementById('example'));