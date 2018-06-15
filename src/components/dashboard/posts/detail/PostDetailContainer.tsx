import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { postActions, PostPayloads } from '../../../../actions';
import { RootState } from '../../../../reducers';
import { PostDetail } from './PostDetail';
import { Spinner } from '../../../shared/spinner/Spinner';
import { Visibility } from '../../../shared/visibility/Visibility';

type ReactDetailContainerDispatch = Readonly<{
    getPost: (payload: PostPayloads) => void
}>;

type ReactDetailContainerOwnProps = Readonly<{
}>;

type ReactDetailContainerProps = ReactDetailContainerDispatch & ReactDetailContainerOwnProps & Readonly<{
    slug: string
    title: string
    heroContent: string | undefined
    content: string | undefined
    coverImage: string | undefined
    createdAt: Date
    modifiedAt: Date
    match: match<{ slug: string }>
    loading: boolean
}>;

class ReactDetailContainerComponent extends React.Component<ReactDetailContainerProps> {

    componentDidMount() {
        window.scrollTo(0, 0);
        const slug = this.props.match.params.slug;
        this.props.getPost({ slug: slug });
    }

    render() {
        return (
            <React.StrictMode>
                <Visibility willShow={!this.props.loading}>
                    <PostDetail {...this.props} />
                </Visibility>
                <Spinner willSpin={this.props.loading} />
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
    modifiedAt: post.item.modifiedAt,
    loading: post.loading
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => (
    bindActionCreators({
        getPost: postActions.requestPost
    }, dispatch)
);

export const PostDetailContainer = connect<{}>(
    mapStateToProps,
    mapDispatchToProps
)(ReactDetailContainerComponent);
