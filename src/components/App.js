import * as React from 'react';
import './App.css';
import { LeftNavbar } from './leftnavbar/LeftNavbar';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PostList } from './dashboard/posts/PostList';
import { About } from './dashboard/about/About';
import { SkillList } from './dashboard/skills/SkillList';
import { ProjectList } from './dashboard/projects/ProjectList';
import { Spinner } from './shared/Spinner';

const Home = () => (
    <h1>hello there</h1>
);


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ "width": "100%", "height": "100%" }}>
                    <div className="leftnavbar">
                        <LeftNavbar />
                        <Spinner shouldSpin={true} />
                    </div>

                    <div className="dashboard">
                        <Switch>
                            <Route exact={true} path="/" component={PostList} />
                            <Route path="/posts" component={PostList} />
                            <Route path="/posts/:slug" component={Home} />
                            <Route path="/skills" component={SkillList} />
                            <Route path="/projects" component={ProjectList} />
                            <Route path="/about" component={About} />
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

                            <Route component={PostList} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
