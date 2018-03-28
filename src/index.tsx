import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { unregister as unregisterServiceWorker } from './registerServiceWorker';
import './index.css';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

unregisterServiceWorker();
