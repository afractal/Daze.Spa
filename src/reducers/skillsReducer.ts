import { SkillsState } from '.';
import { SkillsActions, SKILLS_REQUESTED, SKILLS_SUCCEEDED } from '../actions';

const initialState: SkillsState = {
    items: [],
    loading: false
};

export default (state = initialState, action: SkillsActions): SkillsState => {
    switch (action.type) {
        case SKILLS_REQUESTED: {
            return { ...state, loading: true };
        }

        case SKILLS_SUCCEEDED: {
            const { skills } = action.payload;
            return {
                ...state,
                loading: false,
                items: [...state.items, ...skills]
            };
        }

        default:
            return state;
    }
};
