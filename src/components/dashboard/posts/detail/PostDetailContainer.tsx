import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { postActions, PostPayloads } from 'src/actions';
import { RootState } from 'src/reducers';
import { PostDetail } from './PostDetail';
import { match } from 'react-router-dom';
import { Spinner } from '../../../shared/spinner/Spinner';
import { Visibility } from '../../../shared/visibility/Visibility';

type ReactDetailContainerDispatch = {
    readonly getPost: (payload: PostPayloads) => void
};

type ReactDetailContainerOwnProps = {};

type ReactDetailContainerProps = ReactDetailContainerDispatch & ReactDetailContainerOwnProps & {
    readonly slug: string
    readonly title: string
    readonly heroContent: string | undefined
    readonly content: string | undefined
    readonly coverImage: string | undefined
    readonly createdAt: Date
    readonly modifiedAt: Date
    readonly match: match<{ slug: string }>
    readonly loading: boolean
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
