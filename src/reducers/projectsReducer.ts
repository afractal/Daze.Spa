import { ProjectsState } from '.';
import { ProjectsActions, PROJECTS_REQUESTED, PROJECTS_SUCCEEDED } from '../actions';

const initialState: ProjectsState = {
    items: [],
    loading: false
};

export default (state = initialState, action: ProjectsActions): ProjectsState => {
    switch (action.type) {
        case PROJECTS_REQUESTED: {
            return { ...state, loading: true };
        }

        case PROJECTS_SUCCEEDED: {
            const { projects } = action.payload;
            return {
                ...state,
                loading: false,
                items: projects
            };
        }

        default:
            return state;
    }
};
