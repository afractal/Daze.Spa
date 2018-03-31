import * as React from 'react';
import { Post } from 'src/domain';
import { connect } from 'react-redux';
import { RootState } from 'src/reducers';
import { PostList } from './PostList';
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

class PostListContainerComponent extends React.Component<PostListContainerProps> {

    componentDidMount() {
        this.props.getPosts({});
    }

    render() {
        return (
            <PostList
                posts={this.props.posts}
            />
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    posts: state.posts.items
});

const mapDispatchToProps = (dispatch: ApplicationDispatch<RootState>): PostListContainerDispatch => (
    bindActionCreators({
        getPosts: postActions.requestPosts
    }, dispatch)
);

export const PostListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListContainerComponent);
