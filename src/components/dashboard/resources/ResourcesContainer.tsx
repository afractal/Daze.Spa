import * as React from 'react';
import './ResourcesContainer.css';
import { Resource as ResourceDomain } from '../../../domain';
import { Resource as ResourceComponent } from './resource/Resource';
import { connect } from 'react-redux';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { resourcesActions, ResourcesPayloads } from '../../../actions';
import { RootState } from '../../../reducers';

type ResourcesContainerDispatch = Readonly<{
    fetchResources: (payload: ResourcesPayloads) => void
}>;

type ResourcesContainerOwnProps = Readonly<{
    resources: ResourceDomain[]
    loading: boolean
}>;

type ResourcesContainerProps = ResourcesContainerDispatch & ResourcesContainerOwnProps & Readonly<{
}>;

class ResourcesContainerComponent extends React.Component<ResourcesContainerProps> {

    componentDidMount() {
        this.props.fetchResources({});
    }

    renderResource = (resource: ResourceDomain, indx: number) => (
        <ResourceComponent
            key={indx}
            name={resource.name}
            link={resource.link}
            description={resource.description}
        />
    )

    renderResources = (resources: ResourceDomain[]) => (
        <>
            <div className="resource-category">
                category
            </div>
            <div className="resource-list">
                {resources.map(this.renderResource)}
            </div>
        </>
    )

    render() {
        return (
            <React.StrictMode>
                <div className="resources-container">
                    {this.renderResources(this.props.resources)}
                </div>
            </React.StrictMode>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    resources: state.resources.items,
    loading: state.resources.loading
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => (
    bindActionCreators({
        fetchResources: resourcesActions.requestResources
    }, dispatch)
);

export const ResourcesContainer = connect<{}>(
    mapStateToProps,
    mapDispatchToProps
)(ResourcesContainerComponent);
