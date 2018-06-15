import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, AnyAction, Dispatch } from 'redux';
import { ProjectList } from './ProjectList';
import { Project } from '../../../domain';
import { RootState } from '../../../reducers';
import { ProjectsPayloads, projectsActions } from '../../../actions';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';

type ProjectListContainerDispatch = Readonly<{
    fetchProjects: (payload: ProjectsPayloads) => void
}>;

type ProjectListContainerOwnProps = Readonly<{
}>;

type ProjectListContainerProps = ProjectListContainerDispatch & ProjectListContainerOwnProps & Readonly<{
    projects: Project[]
    loading: boolean
}>;

class ProjectListContainerComponent extends React.Component<ProjectListContainerProps> {

    componentDidMount() {
        this.props.fetchProjects({});
    }

    render() {
        return (
            <React.StrictMode>
                <Visibility willShow={!this.props.loading}>
                    <ProjectList projects={this.props.projects} />
                </Visibility>
                <Spinner willSpin={this.props.loading} />
            </React.StrictMode>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    projects: state.projects.items,
    loading: state.projects.loading
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): ProjectListContainerDispatch => (
    bindActionCreators({
        fetchProjects: projectsActions.requestProjects
    }, dispatch)
);

export const ProjectListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListContainerComponent);
