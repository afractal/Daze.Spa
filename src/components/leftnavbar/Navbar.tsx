import * as React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Avatar } from './avatar/Avatar';

type LeftnavBarProps = {};

export const LeftnavBar = (props: LeftnavBarProps) => (
    <nav>
        <ul className="leftnavbarActionsList nonDraggable">
            <li>
                <Avatar />
            </li>

            <li className="leftnavbarAction">
                <Link to="/posts">
                    <span>blog</span>
                </Link>
            </li>

            <li className="leftnavbarAction">
                <Link to="/projects">
                    <span>projects</span>
                </Link>
            </li>

            <li className="leftnavbarAction">
                <Link to="/about" >
                    <span>about</span>
                </Link>
            </li>

            {/*
            <li className="leftnavbarAction">
                <a routerLink="/skills" routerLinkActive="active" Fstyle="pointer-events: none">
                    <del style="pointer-events: none">
                        <span>skills</span>
                    </del>
                </a>
            </li>
            */}

            <li className="leftnavbarAction">
                <a href="https://github.com/afractal">
                    <span>github</span>
                </a>
            </li>

            <li className="leftnavbarAction">
                <a
                    href="https://www.codewars.com/users/afractal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>codewars</span>
                </a>
            </li>

            <li className="leftnavbarAction">
                <a
                    href="https://twitter.com/hermesgjini"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>twitter</span>
                </a>
            </li>

            <li className="leftnavbarAction">
                <a
                    href="https://www.producthunt.com/@hermesgjini/submitted"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>product hunt</span>
                </a>
            </li>
        </ul>
    </nav>
);

// <!--<footer class="version">
//     Copyright &copy; Hermes Gjini All Rights Reserved.<br /> Version: <em>{{version}}</em>
// </footer>-->
