import * as React from 'react';
import './Avatar.css';
const Logo = require('../../../assets/images/afractal_logo_white.png');

type AvatarProps = Readonly<{
}>;

export const Avatar = (props: AvatarProps) => (
    <>
        <div className="avatarImageContainer nonDraggable">
            <img src={Logo} />
        </div>

        <div
            className="penName"
            style={{ paddingTop: '1em', color: 'white' }}
        >
            <h3>afractal</h3>
        </div>
    </>
);
