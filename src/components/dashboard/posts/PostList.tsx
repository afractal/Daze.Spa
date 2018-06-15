import * as React from 'react';
import './PostList.css';
import { Post as PostDomain } from '../../../domain';
import { Post } from './post/Post';

type PostListProps = Readonly<{
    posts: PostDomain[]
}>;

const mapToPost = (post: PostDomain, index: number) => (
    <Post
        key={index}
        {...post}
    />
);

const renderPosts = (posts: PostDomain[]) =>
    posts.map(mapToPost);

export const PostList = (props: PostListProps) => (
    <ul className="postList">
        {renderPosts(props.posts)}
    </ul>
);
