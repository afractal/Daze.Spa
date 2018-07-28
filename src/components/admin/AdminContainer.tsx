import * as React from 'react';
import './AdminContainer.css';

type AdminContainerProps = Readonly<{
}>;

export const AdminContainer = (props: AdminContainerProps) => (
    <div className="admin-dashboard">
        <div className="admin-dashboard__top">
            <select className="admin-dashboard__context-switcher">
                <option value="posts">
                    <Link to="/admin/posts">
                        <span>posts</span>
                    </Link>
                </option>
                <option value="projects">
                    <Link to="/admin/projects">
                        <span>projects</span>
                    </Link>
                </option>
                <option value="skills">
                    <Link to="/admin/skills">
                        <span>skills</span>
                    </Link>
                </option>
                <option value="resources">
                    <Link to="/admin/resources">
                        <span>resources</span>
                    </Link>
                </option>
                <option value="books">
                    <Link to="/admin/books">
                        <span><books</span>
                    </Link>
                </option>
            </select>
        </div>

        <div className="admin-dashboard__middle">
            <div className="admin-dashboard__actions">
                <button className="admin-dashboard__actions__new">New^</button>
            </div>
            <div className="admin-dashboard__actions">
                <button className="admin-dashboard__actions__new">New^</button>
            </div>
        </div>

        <div className="admin-dashboard__bottom">
            <ul className="admin-dashboard__list">
                <li className="admin-dashboard__list-item">one</li>
                <li className="admin-dashboard__list-item">two</li>
                <li className="admin-dashboard__list-item">three</li>
                <li className="admin-dashboard__list-item">four</li>
            </ul>
        </div>
    </div>
);
