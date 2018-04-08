import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PostList } from './PostList';
import { Post } from 'src/domain';
import { RootState } from 'src/reducers';
import { ApplicationDispatch, postsActions, morePostsActions, PostsPayloads, MorePostsPayloads } from 'src/actions';
import { Disability } from '../../shared/disability/Disability';
import { Button } from '../../shared/button/Button';
import { Visibility } from '../../shared/visibility/Visibility';
import { Spinner } from '../../shared/spinner/Spinner';

type PostListContainerDispatch = {
    readonly getPosts: (payload: PostsPayloads) => void
    readonly getMorePosts: (payload: MorePostsPayloads) => void
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
        this.props.getPosts({});
    }

    loadMore = () => {
        this.props.getMorePosts({
            offset: this.props.offset,
            limit: this.props.limit
        });
    }

    render() {
        return (
            <React.StrictMode>
                <Visibility willShow={!this.props.loading}>
                    <PostList posts={this.props.posts} />
                    <Disability whillDisable={false}>
                        <Button onClicked={this.loadMore} />
                    </Disability>
                </Visibility>
                <Spinner willSpin={this.props.loading} />
            </React.StrictMode>
        );
    }
}

const mapStateToProps = ({ posts, morePosts }: RootState) => ({
    posts: [
        ...posts.items,
        ...morePosts.items
    ],
    offset: morePosts.offset,
    limit: morePosts.limit,
    loading: posts.loading
});

const mapDispatchToProps = (dispatch: ApplicationDispatch<RootState>): PostListContainerDispatch => (
    bindActionCreators({
        getPosts: postsActions.requestPosts,
        getMorePosts: morePostsActions.requestMorePosts
    }, dispatch)
);

export const PostListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListContainerComponent);
