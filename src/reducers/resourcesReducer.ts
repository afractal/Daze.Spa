import { ResourcesState } from '.';
import { ResourcesActions, RESOURCES_REQUESTED, RESOURCES_SUCCEEDED } from '../actions';

const initialState: ResourcesState = {
    items: [],
    loading: false
};

export default (state = initialState, action: ResourcesActions): ResourcesState => {
    switch (action.type) {
        case RESOURCES_REQUESTED: {
            return { ...state, loading: true };
        }

        case RESOURCES_SUCCEEDED: {
            const { resources } = action.payload;
            return {
                ...state,
                loading: false,
                items: [...state.items, ...resources]
            };
        }

        default:
            return state;
    }
};
