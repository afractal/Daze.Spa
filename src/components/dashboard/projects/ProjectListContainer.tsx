import * as React from 'react';
import { ProjectList } from './ProjectList';
import { connect } from 'react-redux';
import { Project } from 'src/domain';
import { RootState } from 'src/reducers';
import { ApplicationDispatch, ProjectsPayloads, projectsActions } from 'src/actions';
import { bindActionCreators } from 'redux';

type ProjectListContainerDispatch = {
    readonly getProjects: (payload: ProjectsPayloads) => void
};

type ProjectListContainerOwnProps = {};

type ProjectListContainerProps = ProjectListContainerDispatch & ProjectListContainerOwnProps & {
    readonly projects: Project[]
};

class ProjectListContainerComponent extends React.Component<ProjectListContainerProps> {

    componentDidMount() {
        this.props.getProjects({});
    }

    render() {
        return (
            <React.StrictMode>
                <ProjectList
                    projects={this.props.projects}
                />
            </React.StrictMode>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    projects: state.projects.items
});

const mapDispatchToProps = (dispatch: ApplicationDispatch<RootState>): ProjectListContainerDispatch => (
    bindActionCreators({
        getProjects: projectsActions.requestProjects
    }, dispatch)
);

export const ProjectListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListContainerComponent);
