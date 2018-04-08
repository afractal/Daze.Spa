import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PostList } from './PostList';
import { Post } from 'src/domain';
import { RootState } from 'src/reducers';
import { ApplicationDispatch, postsActions, PostsPayloads } from 'src/actions';
import { Disability } from '../../shared/disability/Disability';
import { Button } from '../../shared/button/Button';
import { Spinner } from '../../shared/spinner/Spinner';

type PostListContainerDispatch = {
    readonly getPosts: (payload: PostsPayloads) => void
};

type PostListContainerOwnProps = {
};

type PostListContainerProps = PostListContainerDispatch & PostListContainerOwnProps & {
    readonly posts: Post[]
    readonly loading: boolean
    readonly offset: number
    readonly limit: number
};

class PostListContainerComponent extends React.Component<PostListContainerProps> {

    componentDidMount() {
        this.props.getPosts({
            offset: this.props.offset,
            limit: this.props.limit
        });
    }

    loadMore = () => {
        this.props.getPosts({
            offset: this.props.offset,
            limit: this.props.limit
        });
    }

    render() {
        return (
            <React.StrictMode>
                <Spinner willSpin={this.props.loading} />
                <PostList posts={this.props.posts} />
                <Disability whillDisable={this.props.loading}>
                    <Button onClicked={this.loadMore} />
                </Disability>
            </React.StrictMode>
        );
    }
}

const mapStateToProps = ({ posts }: RootState) => ({
    posts: posts.items,
    offset: posts.offset,
    limit: posts.limit,
    loading: posts.loading
});

const mapDispatchToProps = (dispatch: ApplicationDispatch<RootState>): PostListContainerDispatch => (
    bindActionCreators({
        getPosts: postsActions.requestPosts,
    }, dispatch)
);

export const PostListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListContainerComponent);
