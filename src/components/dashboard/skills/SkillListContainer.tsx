import * as React from 'react';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';
import { Skill as SkillDomain } from '../../../domain';
import { SkillList } from './SkillList';
import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { SkillsPayloads, skillsActions } from '../../../actions';

type SkillListContainerDispatch = Readonly<{
    fetchSkills: (payload: SkillsPayloads) => void
}>;

type SkillListContainerOwnProps = Readonly<{
}>;

type SkillListContainerProps = SkillListContainerDispatch & SkillListContainerOwnProps & Readonly<{
    skills: SkillDomain[]
    boolean: boolean
}>;

const skills: SkillDomain[] = ([
    {
        name: 'javascript',
        level: 6.9
    },
    {
        name: 'c#',
        level: 5.6
    },
    {
        name: 'postgresql',
        level: 8.2
    },
    {
        name: 'node',
        level: 9.1
    }
]);

export const SkillListContainerComponent = (props: SkillListContainerProps) => (
    <React.StrictMode>
        <Spinner willSpin={false} />
        <Visibility willShow={true} >
            <SkillList skills={skills} />
        </Visibility>
    </React.StrictMode>
);

const mapStateToProps = (state: RootState) => ({
    skills: state.skills.items,
    loading: state.skills.loading
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): SkillListContainerDispatch => (
    bindActionCreators({
        fetchSkills: skillsActions.requestSkills
    }, dispatch)
);

export const SkillListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillListContainerComponent);
