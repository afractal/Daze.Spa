import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const Home = () => (
    <h1>hello there</h1>
);

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>



                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/posts" component={Home} />
                        <Route path="/posts/:slug" component={Home} />
                        <Route path="/skills" component={Home} />
                        <Route path="/projects" component={Home} />
                        <Route path="/about" component={Home} />
                        <Route path="/login" component={Home} />
                        <Route path="/admin" component={Home} />
                        <Route path="/admin/posts" component={Home} />
                        <Route path="/admin/posts/create" component={Home} />
                        <Route path="/admin/posts/update/:id" component={Home} />
                        <Route path="/admin/projects" component={Home} />
                        <Route path="/admin/projects/create" component={Home} />
                        <Route path="/admin/projects/update/:id" component={Home} />
                        <Route path="/admin/skills" component={Home} />
                        <Route path="/admin/skills/create" component={Home} />
                        <Route path="/admin/skills/update/:id" component={Home} />

                        <Route component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
