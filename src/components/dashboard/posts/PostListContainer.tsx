import * as React from 'react';
import { bindActionCreators, AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PostList } from './PostList';
import { Post } from '../../../domain';
import { RootState } from '../../../reducers';
import { postsActions, PostsPayloads } from '../../../actions';
import { Disability } from '../../shared/disability/Disability';
import { Button } from '../../shared/button/Button';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';

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
                <Visibility willShow={!!this.props.posts.length}>
                    <Disability whillDisable={this.props.loading}>
                        <Button onClicked={this.loadMore} />
                    </Disability>
                </Visibility>
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

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): PostListContainerDispatch => (
    bindActionCreators({
        getPosts: postsActions.requestPosts,
    }, dispatch)
);

export const PostListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListContainerComponent);
