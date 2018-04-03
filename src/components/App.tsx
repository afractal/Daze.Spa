import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { PostListContainer } from './dashboard/posts/PostListContainer';
import { ProjectListContainer } from './dashboard/projects/ProjectListContainer';
import { LeftnavBar } from './leftnavbar/LeftNavbar';

const NotFound = () => (
    <h2>page not found</h2>
);

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="leftnavbar">
                        <React.StrictMode>
                            <LeftnavBar />
                        </React.StrictMode>
                    </div>
                    <div className="dashboard">
                        <Switch>
                            <Route exact={true} path="/" component={PostListContainer} />
                            <Route path="/posts" component={PostListContainer} />
                            <Route path="/posts/:slug" component={NotFound} />
                            <Route path="/projects" component={ProjectListContainer} />
                            <Route path="/skills" component={NotFound} />
                            <Route path="/about" component={NotFound} />
                            <Route path="/login" component={NotFound} />
                            <Route path="/admin" component={NotFound} />
                            <Route path="/admin/posts" component={NotFound} />
                            <Route path="/admin/posts/create" component={NotFound} />
                            <Route path="/admin/posts/update/:id" component={NotFound} />
                            <Route path="/admin/projects" component={NotFound} />
                            <Route path="/admin/projects/create" component={NotFound} />
                            <Route path="/admin/projects/update/:id" component={NotFound} />
                            <Route path="/admin/skills" component={NotFound} />
                            <Route path="/admin/skills/create" component={NotFound} />
                            <Route path="/admin/skills/update/:id" component={NotFound} />

                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
