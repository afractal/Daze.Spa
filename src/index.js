import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { unregisterServiceWorker } from './registerServiceWorker';
import './index.css';

// import { Switch, Route } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';

// const Home = () => (
//     <h1>hello there</h1>
// );

// const AppWithRoutes = () => (
//     <BrowserRouter>
//         <Switch>
//             <Route exact={true} path="/" component={App} />
//             <Route path="/posts" component={Home} />
//             <Route path="/posts/:slug" component={Home} />
//             <Route path="/skills" component={Home} />
//             <Route path="/projects" component={Home} />
//             <Route path="/about" component={Home} />
//             <Route path="/login" component={Home} />
//             <Route path="/admin" component={Home} />
//             <Route path="/admin/posts" component={Home} />
//             <Route path="/admin/posts/create" component={Home} />
//             <Route path="/admin/posts/update/:id" component={Home} />
//             <Route path="/admin/projects" component={Home} />
//             <Route path="/admin/projects/create" component={Home} />
//             <Route path="/admin/projects/update/:id" component={Home} />
//             <Route path="/admin/skills" component={Home} />
//             <Route path="/admin/skills/create" component={Home} />
//             <Route path="/admin/skills/update/:id" component={Home} />

//             <Route component={App} />
//         </Switch>
//     </BrowserRouter>
// );

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

unregisterServiceWorker();
