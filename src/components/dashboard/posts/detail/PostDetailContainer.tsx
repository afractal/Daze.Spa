import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationDispatch, postActions, PostPayloads } from 'src/actions';
import { RootState } from 'src/reducers';
import { PostDetail } from './PostDetail';
import { match } from 'react-router-dom';

type ReactDetailContainerDispatch = {
    getPost: (payload: PostPayloads) => void
};

type ReactDetailContainerOwnProps = {};

type ReactDetailContainerProps = ReactDetailContainerDispatch & ReactDetailContainerOwnProps & {
    slug: string
    title: string
    heroContent: string | undefined
    content: string | undefined
    coverImage: string | undefined
    createdAt: Date
    modifiedAt: Date
    match: match<{ slug: string }>
};

class ReactDetailContainerComponent extends React.Component<ReactDetailContainerProps> {

    componentDidMount() {
        window.scrollTo(0, 0);
        const slug = this.props.match.params.slug;
        this.props.getPost({ slug: slug });
    }

    render() {
        return (
            <React.StrictMode>
                <PostDetail {...this.props} />
            </React.StrictMode>
        );
    }
}

const mapStateToProps = ({ post }: RootState) => ({
    slug: post.item.slug,
    title: post.item.title,
    heroContent: post.item.heroContent,
    content: post.item.content,
    coverImage: post.item.coverImage,
    createdAt: post.item.createdAt,
    modifiedAt: post.item.modifiedAt
});

const mapDispatchToProps = (dispatch: ApplicationDispatch<RootState>) => (
    bindActionCreators({
        getPost: postActions.requestPost
    }, dispatch)
);

export const PostDetailContainer = connect<{}>(
    mapStateToProps,
    mapDispatchToProps
)(ReactDetailContainerComponent);