import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD:src/components/App.js
import { LeftNavbar } from './leftnavbar/LeftNavbar';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PostList } from './dashboard/posts/PostList';
import { About } from './dashboard/about/About';
import { SkillList } from './dashboard/skills/SkillList';
import { ProjectList } from './dashboard/projects/ProjectList';
import { Spinner } from './shared/Spinner';
=======

const Home = () => (
    <h1>hello there</h1>
);
>>>>>>> parent of 78977cc... readd spinner component:src/components/App.tsx

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
