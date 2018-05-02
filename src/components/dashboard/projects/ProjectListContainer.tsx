import * as React from 'react';
import { ProjectList } from './ProjectList';
import { connect } from 'react-redux';
import { Project } from 'src/domain';
import { RootState } from 'src/reducers';
import { ProjectsPayloads, projectsActions } from 'src/actions';
import { bindActionCreators, AnyAction, Dispatch } from 'redux';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';

type ProjectListContainerDispatch = {
    readonly getProjects: (payload: ProjectsPayloads) => void
};

type ProjectListContainerOwnProps = {};

type ProjectListContainerProps = ProjectListContainerDispatch & ProjectListContainerOwnProps & {
    readonly projects: Project[]
    readonly loading: boolean
};

class ProjectListContainerComponent extends React.Component<ProjectListContainerProps> {

    componentDidMount() {
        this.props.getProjects({});
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
        getProjects: projectsActions.requestProjects
    }, dispatch)
);

export const ProjectListContainer = connect<{}>(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListContainerComponent);
