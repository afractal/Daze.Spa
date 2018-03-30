import * as React from 'react';
import { Post } from 'src/domain';
import { connect } from 'react-redux';
import { RootState } from 'src/reducers';
// import { PostList } from './PostList';
import { ApplicationDispatch, postActions, PostsPayloads } from 'src/actions';
import { bindActionCreators } from 'redux';

type PostListContainerDispatch = {
    readonly getPosts: (payload: PostsPayloads) => void
};

type PostListContainerOwnProps = {
};

type PostListContainerProps = PostListContainerDispatch & PostListContainerOwnProps & {
    readonly posts: Post[]
};

const PostListContainerComponent = (props: PostListContainerProps) => {
    console.log('hello there');
    return (<div>hello </div>);
    // return (
    //     <PostList posts={props.posts} />
    // );
};

const mapStateToProps = (state: RootState) => ({
    props: state.posts
});

const mapDispatchToProps = (dispatch: ApplicationDispatch<RootState>): PostListContainerDispatch => (
    bindActionCreators({
        getPosts: postActions.requestPosts
    }, dispatch)
);

export const PostListContainer = connect<{}>(
    mapStateToProps,
    mapDispatchToProps
)(PostListContainerComponent);
