import { ProjectsState } from '.';
import { ProjectsActions, PROJECTS_REQUESTED, PROJECTS_SUCCEEDED } from 'src/actions';

const initialState: ProjectsState = {
    items: [],
    loading: false
};

export default (state = initialState, action: ProjectsActions): ProjectsState => {
    switch (action.type) {
        case PROJECTS_REQUESTED: {
            return { ...state };
        }

        case PROJECTS_SUCCEEDED: {
            const items = action.payload.projects;
            return { ...state, items };
        }

        default:
            return state;
    }
};
