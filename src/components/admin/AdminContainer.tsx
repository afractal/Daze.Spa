import * as React from 'react';
import './AdminContainer.css';

type AdminContainerProps = Readonly<{
}>;

export const AdminContainer = (props: AdminContainerProps) => (
    <div className="admin-dashboard">
        <div className="admin-dashboard__top">
            <select className="admin-dashboard__context-switcher">
                <option value="posts">posts</option>
                <option value="projects">projects</option>
                <option value="skills">skills</option>
                <option value="resources">resources</option>
                <option value="books">books</option>
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
