import * as React from 'react';
import './AdminContainer.css';
import { Link } from 'react-router-dom';

type AdminContainerProps = Readonly<{
}>;

export const AdminContainer = (props: AdminContainerProps) => (
    <div className="admin-dashboard">
        <div className="admin-dashboard__top">
            <ul className="admin-dashboard__context-switcher">
                <li>
                    <Link to="/admin/posts">
                        <span>posts</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/projects">
                        <span>projects</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/skills">
                        <span>skills</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/resources">
                        <span>resources</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/books">
                        <span>books</span>
                    </Link>
                </li>
            </ul>
        </div>

        <div className="admin-dashboard__middle">
            <div className="admin-dashboard__actions">
                <button className="admin-dashboard__actions__new">left</button>
            </div>
            <div className="admin-dashboard__actions">
                <button className="admin-dashboard__actions__new">New</button>
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
