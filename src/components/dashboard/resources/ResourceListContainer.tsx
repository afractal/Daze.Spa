import * as React from 'react';
import { Resource as ResourceDomain } from '../../../domain';
import { connect } from 'react-redux';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { resourcesActions, ResourcesPayloads } from '../../../actions';
import { RootState } from '../../../reducers';
import { Visibility } from '../../shared/visibility/Visibility';
import { Spinner } from '../../shared/spinner/Spinner';
import { ResourceList } from './ResourceList';

type ResourceListContainerDispatch = Readonly<{
    fetchResources: (payload: ResourcesPayloads) => void
}>;

type ResourceListContainerOwnProps = Readonly<{
}>;

type ResourceListContainerProps = ResourceListContainerDispatch & ResourceListContainerOwnProps & Readonly<{
    resources: ResourceDomain[]
    loading: boolean
}>;

class ResourceListContainerComponent extends React.Component<ResourceListContainerProps> {

    componentDidMount() {
        this.props.fetchResources({});
    }

    render() {
        return (
            <React.StrictMode>
                <Spinner willSpin={this.props.loading} />
                <Visibility willShow={!this.props.loading} >
                    <ResourceList resources={this.props.resources} />
                </Visibility>
            </React.StrictMode>
        );
    }
}

const mapStateToProps = ({ resources }: RootState) => ({
    resources: resources.items,
    loading: resources.loading
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): ResourceListContainerDispatch => (
    bindActionCreators({
        fetchResources: resourcesActions.requestResources
    }, dispatch)
);

export const ResourceListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourceListContainerComponent);
