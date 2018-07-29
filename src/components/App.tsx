import * as React from 'react';
import './App.css';
import '../assets/styles/github-markdown.css';
import 'highlight.js/styles/github-gist.css';
import 'nprogress/nprogress.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PostListContainer } from './dashboard/posts/PostListContainer';
import { ProjectListContainer } from './dashboard/projects/ProjectListContainer';
import { LeftnavBar } from './leftnavbar/Navbar';
import { PostDetailContainer } from './dashboard/posts/detail/PostDetailContainer';
import { ResourceListContainer } from './dashboard/resources/ResourceListContainer';
import { SkillListContainer } from './dashboard/skills/SkillListContainer';
import { BookListContainer } from './dashboard/books/BookListContainer';
import { AdminContainer } from './admin/AdminContainer';
import { AdminPostsContainer } from './admin/posts/AdminPostsContainer';
import { AdminProjectsContainer } from './admin/projects/AdminProjectsContainer';
import { AdminSkillsContainer } from './admin/skills/AdminSkillsContainer';
import { AdminResourcesContainer } from './admin/resources/AdminResourcesContainer';
import { AdminBooksContainer } from './admin/book/AdminBooksContainer';

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
                            <Route exact={true} path="/posts" component={PostListContainer} />
                            <Route path="/posts/:slug" component={PostDetailContainer} />
                            <Route path="/projects" component={ProjectListContainer} />
                            <Route path="/skills" component={SkillListContainer} />
                            <Route path="/books" component={BookListContainer} />
                            <Route path="/resources" component={ResourceListContainer} />
                            <Route path="/about" component={NotFound} />
                            <Route path="/login" component={NotFound} />
                            <Route path="/admin" component={AdminContainer} />
                            <Route path="/admin/posts" component={AdminPostsContainer} />
                            <Route path="/admin/projects" component={AdminProjectsContainer} />
                            <Route path="/admin/skills" component={AdminSkillsContainer} />
                            <Route path="/admin/resources" component={AdminResourcesContainer} />
                            <Route path="/admin/books" component={AdminBooksContainer} />

                            {/* <Route component={NotFound} /> */}
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter >
        );
    }
}

export default App;
