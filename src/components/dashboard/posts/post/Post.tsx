import * as React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

type PostProps = {
    slug: string
    title: string
    coverImage: string | undefined
    heroContent: string | undefined
};

export const Post = (props: PostProps) => (
    <li>
        <article className="postArticle card">
            <div className="postArticleImage">
                <img src={props.coverImage} alt="post image" />
            </div>
            <div className="postArticleBody">
                <h3 className="postArticleBodyTitle">
                    <Link
                        className="blogLink"
                        replace={true}
                        to={{
                            pathname: `/posts/${props.slug}`,
                            state: { slug: props.slug }
                        }}
                    >
                        <span>{props.title}</span>
                    </Link>
                </h3>
                <hr />
                <p className="postArticleBodyDetails">
                    {props.heroContent}
                </p>
            </div>
        </article>
    </li>
);
